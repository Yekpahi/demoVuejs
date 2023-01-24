<template>
    <button @click="emitCustomEvent">Emit Event</button>
    <slot name ="slot1">Les choses se passe bien</slot>
</template>

<script>
export default {
    methods: {
        emitCustomEvent() {
            this.$emit('custom-event-name', { message: 'Mon message personnalisé' })
        }
    }
}
</script>