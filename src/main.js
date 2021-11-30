import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'

// create a vue instance 
createApp(App).use(router).mount('#app')
