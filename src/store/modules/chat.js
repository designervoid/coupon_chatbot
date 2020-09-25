import { INCREMENT_STEP, SHOW_CHATBOT_ANSWER } from '../mutation-types'

const colorOfConfirmAndNotConfigrmButton = '#ffffff'
const colorConfirmButton = '#e41a13'
const colorNotConfirmButton = '#dbb665'

const state = {
    step: 0,
    steps: [{
        type: 'agreement',
        actions: [
            {
                text: 'Yes',
                callback: INCREMENT_STEP,
                styles: {
                    backgroundColor: colorConfirmButton,
                    color: colorOfConfirmAndNotConfigrmButton
                }
            },
            {
                text: 'No',
                callback: 'cancelAlert',
                styles: {
                    backgroundColor: colorNotConfirmButton,
                    color: colorOfConfirmAndNotConfigrmButton
                }
            }
        ],
        file: {
            format: 'pdf',
            filename: 'personal'
        },
        text: 'Вы согласны с правилами обработки пд?',
        avatar: ''
    },
    {
        type: 'agreement',
        actions: [
            {
                text: 'Yes',
                callback: INCREMENT_STEP,
                styles: {
                    backgroundColor: colorConfirmButton,
                    color: colorOfConfirmAndNotConfigrmButton
                }
            },
            {
                text: 'No',
                callback: 'cancelAlert',
                styles: {
                    backgroundColor: colorNotConfirmButton,
                    color: colorOfConfirmAndNotConfigrmButton
                }
            }
        ],
        file: {
            format: 'pdf',
            filename: 'stock'
        },
        text: 'Вы согласны с правилами акции?',
        avatar: ''
    },
    {
        type: 'form',
        inputs: {
            email: 'user-email'
        },
        text: 'Введите вашу почту',
        avatar: '',
        chatbotAnswer: {
            show: false,
            text: 'Проверьте вашу почту'
        },
        actions: [
            {
                text: 'Отправить',
                callback: SHOW_CHATBOT_ANSWER,
                styles: {
                    backgroundColor: colorConfirmButton,
                    color: colorOfConfirmAndNotConfigrmButton
                }
            },
        ],
    }]
}

const getters = {}

const actions = {}

const mutations = {
    [INCREMENT_STEP](state) {
        state.step++
    },
    [SHOW_CHATBOT_ANSWER](state) {
        state.steps[state.step].chatbotAnswer.show = true
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