import { createStore } from "vuex";
import choiceButtons from "./modules/choiceButtons";
import chat from "./modules/chat";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    choiceButtons,
    chat
  }
});
