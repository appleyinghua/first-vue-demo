/* eslint-disable standard/object-curly-even-spacing */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
// 引入路由
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
// 使用路由
Vue.use(VueRouter)
// 实例化路由
const router = new VueRouter({
  routes: [
    {path: '/', component: HelloWorld },
    {path: '/home', component: Home}
  ],
  mode: 'history'
}
)

/* eslint-disable no-new */
// 将路由挂载到APP上
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
