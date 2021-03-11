import Vue from 'vue'
import CryptoJS from 'crypto-js'
import uuid from 'uuid/v4'

import * as functions from '@/functions'

Vue.prototype.$uuid = window.$uuid = uuid
Vue.prototype.$console = window.$console = functions.default.console
Vue.prototype.$crypt = window.$crypt = CryptoJS
Vue.prototype.$empty = window.$empty = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object
Vue.prototype.$env = window.$env = (env) => (!env && (process.env.VUE_APP_NODE_ENV || process.env.NODE_ENV)) || ((process.env.VUE_APP_NODE_ENV || process.env.NODE_ENV) === env)
