<script setup>
import { ref } from 'vue';



const todoValue = ref('');

const maxLength = ref(100);

defineProps({
    newTodo: Function
})


</script>


<template>
    <article class="create-list">
        <div class="wrapper-create-list">
            <input type="text" v-model="todoValue" :maxlength="maxLength" name="create-todo" class="create-todo"
                placeholder="Create new Todo" @keyup.enter="$emit('todovalue', todoValue); newTodo();">
            <div class="wrapper-additional">
                <span class="max-length">{{ todoValue.length }}/{{ maxLength }}</span>
            </div>
        </div>
        <font-awesome-icon @click="$emit('todovalue', todoValue); newTodo();" :icon="['fas', 'plus']" class="plus-svg"/>
    </article>
</template>

<style scoped>

.create-list {
    display: flex;
    align-items: center;
    gap: 5px;
}
.wrapper-create-list {
    position: relative;
    width: 100%;
}

.create-todo {
    padding: 10px;
    outline: 0;
    border-radius: 50px;
    width: 100%;
    padding-right: 70px;
    border: 1px solid var(--border-color-input);
}

.wrapper-additional {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-20%, -50%);
}

.plus-svg {
    color: white;
    background-color: var(--ligth-blue);
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
}

.plus-svg:active {
    transform: scale(0.9);
}
</style>