// 基本配置
import Vue from 'vue'
import router from './router/router'
import store from './store'
import wx from 'weixin-js-sdk'

// 插件配置
import './plugns/component.js'
import './plugns/axios.js'
import './plugns/css.js'
import './plugns/components'

import App from './App.vue'
Vue.config.productionTip = false

new Vue({
    wx,
    router,
    store,
    render: h => h(App)
}).$mount('#app')