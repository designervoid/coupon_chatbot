import { SET_USER_CHOICE } from '../mutation-types'

const state = {
    aliases: {
        0: 'with-baby',
        1: 'without-baby'
    },
    user_choice: {
        state: null,
        text: '' 
    }
}

const getters = {}

const actions = {}

const mutations = {
    [SET_USER_CHOICE](state, payload) {
        state.user_choice.state = payload
        state.user_choice.text = state.aliases[payload]
    }
}

const modules = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules
}