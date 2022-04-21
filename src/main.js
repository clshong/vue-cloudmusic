import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入公共样式
import './assets/css/iconfont.css'
// elementui 使用
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://autumnfish.cn'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
