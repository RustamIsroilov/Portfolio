import '@/assets/styles/Style.css'
import '@/assets/styles/Media.css'

import { createApp } from 'vue'
import routes from '@/router/index'
import App from './App.vue'

createApp(App).use(routes).mount('#app')
