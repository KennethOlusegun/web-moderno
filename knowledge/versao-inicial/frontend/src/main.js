import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] =
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iktlbm5ldGggT2x1c2VndW4iLCJlbWFpbCI6Imtlbm5ldGhvbHVzZWd1bkBnbWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY1OTk5NjI3MywiZXhwIjoxNjYwMjU1NDczfQ.iDO6O3jEJzufBtkzqJd9OQJk7paDxPjJPhdddL0_TY0'

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')