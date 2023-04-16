import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import './assets/main.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(naive)

app.mount('#app')
