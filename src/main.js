// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用阿里图标
import '@/assets/font/iconfont.css'

// 引入axios
//import axiosConfig from './server/index.js'
//Object.defineProperty(Vue.prototype,'$axios',{value:axiosConfig});

// 封装方法axios的get以及post
import  Server from './server/server.js'
Vue.prototype.$get = Server.get;  //get请求
Vue.prototype.$post = Server.post;  //post请求

import store from './store/store.js' // vuex



/* 全局插件 */
import Toast from './plugins/Toast/Toast'
Vue.use(Toast)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
