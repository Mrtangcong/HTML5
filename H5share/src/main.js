// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import toast from './components/toast/index.js';        //引入toast函数  
import ajax from './components/axios/axios.js'


Vue.prototype.ajax = ajax;    
Vue.prototype.toast = toast;
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ajax)
Vue.use(toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
