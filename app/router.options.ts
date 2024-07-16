import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'main',
            path: '/',
            component: () => import('~/pages/main.vue').then(r => r.default || r)
          }
    ]
}
