import { createApp } from 'vue'
// import 'element-plus/theme-chalk/base.css'
import './assets/scss/index.scss'
import App from '@popup/App.vue'
import router from '@popup/routers/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
