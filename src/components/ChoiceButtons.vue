<template>
    <div class="container">
        <button @click="SET_USER_CHOICE(0)" class="waiting-baby">Waiting baby</button>
        <button @click="SET_USER_CHOICE(1)" class="have-baby">Have baby</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'ChoiceButtons',
    computed: {
        ...mapState('choiceButtons', ['aliases', 'user_choice'])
    },
    methods: {
        ...mapMutations('choiceButtons', ['SET_USER_CHOICE'])
    }
}
</script>

<style lang="css" scoped>
    button {
        width: 240px;
        height: 50px;
        text-align: center;
        color: #ffffff;
        border-radius: 2rem;
        border: 0;
    }
    .waiting-baby {
        background-color: #e6c577;
    }
    .have-baby {
        background-color: #e41b13;
    }
    .container {
        display: flex;
        justify-content: space-evenly;
    }
</style>