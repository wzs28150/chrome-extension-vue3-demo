import { createApp } from 'vue'
// import 'element-plus/theme-chalk/base.css'
import App from '@sidepanel/App.vue'
import router from '@sidepanel/routers/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
