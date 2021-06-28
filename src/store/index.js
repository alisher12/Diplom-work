import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import common from './common'
import items from './items'
import buildController from './buildController'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        user,
        common,
        items,
        buildController
    }
})