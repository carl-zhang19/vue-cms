import VueRouter from 'vue-router'
//路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopCarContainer from './components/tabbars/ShopCarContainer.vue'
const router = new VueRouter({
  routes:[
    {path:'/' ,redirect:'/home'},
    {path:'/home' ,component:HomeContainer},
    {path:'/member' ,component:MemberContainer},
    {path:'/search' ,component:SearchContainer},
    {path:'/shop' ,component:ShopCarContainer},
  ],
  linkActiveClass:'mui-active'
})

export default router