import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  state,
  mutations,
  strict: debug,
  // 状态持久化
  plugins: debug ? [
    createLogger(),
    createPersistedState()
  ] : []
})
