import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// dataV：插件注册和使用
import dataV from '@jiaminghi/data-view'
import { borderBox1 } from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(borderBox1)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
