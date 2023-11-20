import { createApp } from 'vue'
import { router } from './router.js'
import './assets/scss/app.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')
