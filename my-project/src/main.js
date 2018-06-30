// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small' }
import '../theme/index.css'
import axios from 'axios'
import './assets/css/init.css'
import './assets/css/common.css'
Vue.prototype.$ajax=axios
// var bus = new Vue();
Vue.prototype.bus=new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

