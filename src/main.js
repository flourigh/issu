import Vue from 'vue'
import App from '@/App'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

import '@/prototype'
import '@/registerServiceWorker'

import VueDisqus from 'vue-disqus'

import * as firebase from 'firebase/app'
import firebaseConfig from '@/.firebase'

Vue.use(VueDisqus)

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
