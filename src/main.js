import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'
import 'animate.css/animate.css'


createApp(App).use(store).use(router).mount('#app')
