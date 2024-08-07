import { createApp } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/scss/index.scss'
import App from './App'
import router from '@devtools/routers/index'
const app = createApp(App)
app.use(router)
app.mount('#app')
