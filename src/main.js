import Vue from 'vue'
import App from './components/App.vue'
//配置mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//导入mui样式表
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './router.js'
//配置axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  //全局设置根路径，发起请求可以不写根地址
  baseURL:'http://api.cms.liulongbin.top'
})


Vue.use(VueRouter)


const vm = new Vue({
  el:'#app',
  render:h=>h(App),
  router,
})