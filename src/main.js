import { createApp} from 'vue'
import router from './router'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";


const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(router).use(ElementPlus).mount('#app')
