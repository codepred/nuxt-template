import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    fields: [{ id: 0, value: '', vowelNumber: 0 }],
    searchText: '',
    nextId: 1,
  }),
  actions: {
    addField() {
      if (this.fields.length < 10) {
        this.fields.push({ id: this.nextId, value: '', vowelNumber: 0 })
        this.nextId++
      }
    },
    removeField(id: number) {
      if (this.fields.length > 1) {
        this.fields = this.fields.filter(field => field.id !== id)
      }
    },
    updateField(id: number, value: string) {
      const field = this.fields.find(field => field.id === id)
      if (field) {
        field.value = value
        field.vowelNumber = (value.match(/[aeiou]/gi) || []).length
      }
    },
    setSearchText(text: string) {
      this.searchText = text
    },
  },
})
