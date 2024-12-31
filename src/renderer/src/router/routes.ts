import { createMemoryHistory, createRouter } from 'vue-router'
import Start from '@renderer/components/Start.vue'
import Main from '@renderer/components/Main/Main.vue'

const routes = [
    {
        name: 'app', path: '/', component: Main,
        children: [
            {
                name: 'Start',
                path: '/',
                component: Start
            }
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router