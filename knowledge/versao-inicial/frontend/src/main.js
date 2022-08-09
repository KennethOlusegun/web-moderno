import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] =
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Iktlbm5ldGggTyIsImVtYWlsIjoia2VubmV0aG9sdXNlZ3VuMTJAZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjAwNzI4MzAsImV4cCI6MTY2MDMzMjAzMH0.lJzIfQ5LFisVkHKE5vumKxBfAxQ8RebSjBHrC-Mc5Vo'

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')