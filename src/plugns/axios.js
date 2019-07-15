import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = '/web/v1'
Vue.prototype.$http = axios