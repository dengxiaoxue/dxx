import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logined: false,
        user: {
            id: null,
            name: '',
            token: ''
        }
    },
    mutations: {
        login(state, payload) {
            //获取window.sessionStorage.getItem('user')
            window.sessionStorage.setItem('user', JSON.stringify(payload))
            state.logined = true
            state.user.id = payload.id
            state.user.name = payload.name
            state.user.token = payload.token
        },
        logout(state) {
            state.logined = false
            state.user.id = null
            state.user.name = ''
        }
    },
    actions: {},
    getters: {
        getToken(state) {
            if (!state.user.token) {
                let user = JSON.parse(sessionStorage.getItem('user'))
                if (user) {
                    state.user.token = user.token
                } else {
                    return false
                }
            }
            return state.user.token
        }
    },
    modules: {}
})