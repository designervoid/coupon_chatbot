<template>
    <button @click="makeChoice(0)">I have a baby</button>
    <button @click="makeChoice(1)">I dont have a baby</button>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const states = reactive({
            0: 'with-baby',
            1: 'without-baby'
        })
        
        const choice = reactive({
            state: null, // номер состояния
            text: '' 
        })

        const makeChoice = (choiceNumber) => {
            choice.state = choiceNumber
            choice.text = states[choiceNumber]
        }
        // onBeforeMount((ctx) => {})

        return { states, choice, makeChoice }
    },
}
</script>
