import {createApp, h} from 'vue'
import router from './router'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-ui/lib/theme-chalk/index.css';
import http from "./request/http";

const app = createApp(App)
app.config.globalProperties.request = http
app.use(router).use(ElementPlus).mount('#app')
