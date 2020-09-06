import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'
import home from './views/home.vue'
import docs from './views/docs.vue'

createApp(App).use(router).mount('#app')
