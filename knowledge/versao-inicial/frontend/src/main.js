import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] =
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iktlbm5ldGggT2x1c2VndW4iLCJlbWFpbCI6Imtlbm5ldGhvbHVzZWd1bkBnbWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY1OTk0MDA1MywiZXhwIjoxNjYwMTk5MjUzfQ.OuwuxLaenj14nQ5gbjjMXiFvQQVMcKEyMV0sfioGHK4'

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')