import Vue from 'Vue'
import Router from 'VueRouter'
import routes from '../router'
import App from './App.vue'

const router = new Router({ routes })

Vue.use(Router)

let vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  data () {
    return { loadingFlag: false }
  }
})

export default vue
