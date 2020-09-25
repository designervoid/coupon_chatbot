<template>
    <ChoiceButtons />
    <div class="container chat-window" :class="user_choice.text.length === 0 ? 'disabled' : '' ">
        {{ steps[step] }}
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
                        <button v-for="(action, index) in step.actions" :key="index" @click="callCallback(action.callback)">
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
                    <div class="textarea">
                        <input type="text" :name="step.inputs.email" :placeholder="step.text">

                        <button v-for="(action, index) in step.actions" :key="index" @click="callCallback(action.callback)">
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
import ChoiceButtons from './ChoiceButtons'
import ChatbotAvatar from './svg/ChatbotAvatar'
import UserAvatar from './svg/UserAvatar'
import PdfIcon from './svg/PdfIcon'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CouponChat',
    components: {
        ChoiceButtons,
        ChatbotAvatar,
        UserAvatar,
        PdfIcon
    },
    computed: {
        ...mapState('choiceButtons', ['user_choice']),
        ...mapState('chat', ['step', 'steps']),
        slicedSteps() {
            return this.steps.slice(0, this.step + 1)
        }
    },
    methods: {
        ...mapMutations('chat', ['INCREMENT_STEP', 'SHOW_CHATBOT_ANSWER']),
        callCallback(callback) {
            this[callback]()
        },
        cancelAlert() {
            alert('Need to agree')
        }
    }
}
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
/* 
.message {
    flex-direction: row-reverse;
} */

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
</style>