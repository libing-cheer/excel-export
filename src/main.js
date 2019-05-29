// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui' // 引入element ui
import 'element-ui/lib/theme-chalk/index.css' // 引入 element ui 样式

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'mini' // set element-ui default size
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
