<template>
  <ChoiceButtons />
  <div
    class="container chat-window"
    :class="user_choice.text.length === 0 ? 'disabled' : ''"
  >
    <div v-for="(step, index) in slicedSteps" :key="index">
      <div v-if="step.type === 'agreement'">
        <div class="message chatbot">
          <div class="avatar">
            <ChatbotAvatar />
          </div>
          <div class="textarea">
            {{ step.text }}
            <div class="attachment">
              <PdfIcon /> {{ step.file.filename }}.{{ step.file.format }}
            </div>
          </div>
        </div>
        <div class="message user">
          <div class="textarea">
            <button
              v-for="(action, index) in step.actions"
              :key="index"
              :disabled="step.isPassed"
              @click="callCallback(action.callback)"
              class="actions-button"
              :style="action.styles"
            >
              {{ action.text }}
            </button>
          </div>
          <div class="avatar">
            <UserAvatar />
          </div>
        </div>
      </div>
      <div v-if="step.type === 'form'">
        <div class="message chatbot">
          <div class="avatar">
            <ChatbotAvatar />
          </div>
          <div class="textarea" style="display: flex; flex-direction: column;">
            <input
              type="text"
              :name="step.inputs.email"
              :placeholder="step.text"
              class="input"
            />

            <button
              v-for="(action, index) in step.actions"
              :key="index"
              @click="callCallback(action.callback)"
              class="actions-button"
              :style="action.styles"
            >
              {{ action.text }}
            </button>
          </div>
        </div>
        <div class="message chatbot" v-if="step.chatbotAnswer.show">
          <div class="avatar">
            <ChatbotAvatar />
          </div>
          <div class="textarea">
            {{ step.chatbotAnswer.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChoiceButtons from "./ChoiceButtons";
import ChatbotAvatar from "./svg/ChatbotAvatar";
import UserAvatar from "./svg/UserAvatar";
import PdfIcon from "./svg/PdfIcon";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CouponChat",
  components: {
    ChoiceButtons,
    ChatbotAvatar,
    UserAvatar,
    PdfIcon
  },
  computed: {
    ...mapState("choiceButtons", ["user_choice"]),
    ...mapState("chat", ["step", "steps"]),
    slicedSteps() {
      return this.steps.slice(0, this.step + 1);
    }
  },
  methods: {
    ...mapMutations("chat", [
      "INCREMENT_STEP",
      "CHANGE_PASSED_STATE",
      "SHOW_CHATBOT_ANSWER"
    ]),
    callCallback(callback) {
      if (Array.isArray(callback)) {
          callback.map(mutation => this[mutation]());
          return
      }
      this[callback]();
    },
    cancelAlert() {
      alert("Need to agree");
    }
  }
};
</script>

<style lang="css" scoped>
.chatbot {
  display: flex;
  justify-content: flex-start;
}

.avatar {
  align-self: flex-end;
}

.chatbot .avatar {
  padding-right: 1rem;
}

.user {
  display: flex;
  justify-content: flex-end;
}

.user .avatar {
  padding-left: 1rem;
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}

.chatbot .textarea {
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  border-radius: 1rem;
  border-bottom-left-radius: 0;
}

.user .textarea {
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  border-radius: 1rem;
  border-bottom-right-radius: 0;
}

.attachment {
  display: flex;
}

.message {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.chat-window {
  height: 50vh;
  overflow: scroll;
}

.actions-button {
  width: 85px;
  height: 42px;
  border-radius: 1rem;
  border-bottom-left-radius: 0;
  border: 0;
  color: #000000;
  margin: 0.5rem 0 0.5rem 0;
}

.input {
  width: 201px;
  height: 45px;
  background-color: #faedd0;
  color: #000000;
  border: 0;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
</style>
