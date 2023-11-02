<script setup>

defineProps({
    visible: Boolean
})

</script>

<template>
    <Transition>
        <div class="wrapper-dialog" v-if="visible">
            <p class="dialog-title">Write Something</p>
            <button class="dialog-btn-close" @click="$emit('close', false)">Close</button>
        </div>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.wrapper-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background-color: wheat;
    text-align: center;
    border-radius: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
}

.dialog-title {
    font-size: 25px;
}

.dialog-btn-close {
    border: 0;
    padding: 5px;
    border-radius: 50px;
    background-color: var(--main-background-color);
    cursor: pointer;
}
</style>