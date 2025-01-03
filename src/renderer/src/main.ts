import './assets/main.css'
import router from '@renderer/router/routes'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
