import Vue from 'vue'
import Router from 'vue-router'
import excelExport from '@/components/excelExport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'excelExport',
      component: excelExport
    }
  ]
})
