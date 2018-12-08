import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.mdui = require("mdui");
window.$ = mdui.JQ;
require("mdui/dist/css/mdui.min.css")

import Func from "./function"
import Api from "./api"

Vue.config.productionTip = false

Vue.use(Func)
Vue.use(Api)

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
