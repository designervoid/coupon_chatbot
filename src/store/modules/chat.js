import {
  INCREMENT_STEP,
  SHOW_CHATBOT_ANSWER,
  CHANGE_PASSED_STATE
} from "../mutation-types";

const colorOfConfirmAndNotConfigrmButton = "#ffffff";
const colorConfirmButton = "#e41a13";
const colorNotConfirmButton = "#dbb665";

const agreementStylesConfirm = {
  backgroundColor: colorConfirmButton,
  color: colorOfConfirmAndNotConfigrmButton,
  "margin-right": "0.5rem"
};

const agreementStylesNotConfirm = {
  backgroundColor: colorNotConfirmButton,
  color: colorOfConfirmAndNotConfigrmButton,
  "margin-left": "0.5rem"
};

const state = {
  step: 0,
  steps: [
    {
      type: "agreement",
      isPassed: false,
      actions: [
        {
          text: "Yes",
          callback: [CHANGE_PASSED_STATE, INCREMENT_STEP],
          styles: { ...agreementStylesConfirm }
        },
        {
          text: "No",
          callback: "cancelAlert",
          styles: { ...agreementStylesNotConfirm }
        }
      ],
      file: {
        format: "pdf",
        filename: "personal"
      },
      text: "Вы согласны с правилами обработки пд?"
    },
    {
      type: "agreement",
      isPassed: false,
      actions: [
        {
          text: "Yes",
          callback: [CHANGE_PASSED_STATE, INCREMENT_STEP],
          styles: { ...agreementStylesConfirm }
        },
        {
          text: "No",
          callback: "cancelAlert",
          styles: { ...agreementStylesNotConfirm }
        }
      ],
      file: {
        format: "pdf",
        filename: "stock"
      },
      text: "Вы согласны с правилами акции?"
    },
    {
      type: "form",
      isPassed: false,
      inputs: {
        email: "user-email"
      },
      text: "Введите вашу почту",
      chatbotAnswer: {
        show: false,
        text: "Проверьте вашу почту"
      },
      actions: [
        {
          text: "Отправить",
          callback: [CHANGE_PASSED_STATE, SHOW_CHATBOT_ANSWER, INCREMENT_STEP],
          styles: {
            backgroundColor: colorConfirmButton,
            color: colorOfConfirmAndNotConfigrmButton
          }
        }
      ]
    }
  ]
};

const getters = {};

const actions = {};

const mutations = {
  [INCREMENT_STEP](state) {
    state.step++;
  },
  [SHOW_CHATBOT_ANSWER](state) {
    state.steps[state.step].chatbotAnswer.show = true;
  },
  [CHANGE_PASSED_STATE](state) {
    state.steps[state.step].isPassed = true;
  }
};

const modules = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
};
