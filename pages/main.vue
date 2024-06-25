<script setup lang="ts">
import { useFormStore } from '~/store/form'

const isStoreLoaded = ref(false)
const formStore = useFormStore()

const isSearchMatch = computed(() => {
    if (!formStore.searchText) return false;
    return formStore.fields.some(field => field.value.includes(formStore.searchText));
});

watch(formStore, () => {
    if (formStore.fields) {
        isStoreLoaded.value = true
    }
})
</script>

<template>
    <v-card>
        <div
            v-if="isStoreLoaded"
            class="overflow-y-auto pb-8"
            style="max-height: 500px;"
        >
            <div>Search:
                <v-text-field
                    v-model="formStore.searchText"
                    @input="formStore.setSearchText(formStore.searchText)"
                    append-inner-icon="mdi-magnify"
                    hide-details
                    :class="{ highlight: isSearchMatch }"
                ></v-text-field>
            </div>
            <v-list lines="two">
                <v-list-item
                    v-for="(line, index) in formStore.fields"
                    :key="index"
                >
                    <template class="d-flex align-center justify-space-between ga-3 w-100">
                        <v-text-field
                            class="w-50"
                            v-model="line.value"
                            hide-details
                            @input="formStore.updateField(line.id, line.value)"
                            :class="{ highlight: formStore.searchText && line.value.includes(formStore.searchText) }"
                        >
                        </v-text-field>
                        <span>
                            Vowel counter: {{ line.vowelNumber }}
                        </span>
                        <v-icon @click="formStore.removeField(line.id)">
                            mdi-trash-can-outline
                        </v-icon>
                    </template>
                </v-list-item>
            </v-list>
            <div
                class="d-flex ga-2 cursor-pointer w-fit-content add-new-row-container"
                @click="formStore.addField"
            >
                <v-icon :disabled="formStore.fields.length >= 10">
                    mdi-plus
                </v-icon>
                Add new row
            </div>
        </div>
        <div
            v-if="!isStoreLoaded"
            class="d-flex justify-center align-center"
        >
            <SpinnerModal />
        </div>
    </v-card>
</template>

<style>
.v-card {
    top: 100px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 12px;
    padding: 16px;
}

.highlight {
    background-color: #4BB543;
}

@media (max-width: 350px) {
    .v-card {
        top: 0px;
    }
}
</style>