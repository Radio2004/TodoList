<script setup>

defineProps({
    dataBase: Array,
    deleteTodo: Function
});


</script>


<template>
    <article class="todos">
        <ul class="todo-list">
            <li v-for="data in dataBase" :key="data.id" class="todo-list-item">
                <span class="list-item-text">{{ data.text }}</span>
                <font-awesome-icon :icon="['fas', 'trash']" class="trash-svg" @click="deleteTodo(data)"/>
            </li>
        </ul>
    </article>
</template>


<style scoped>
.todo-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.list-item-text {
    overflow: hidden;
    word-break: break-all;
}

.todo-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    background-color: var(--main-background-color);
    border: 0;
}

.trash-svg {
    background-color: red;
    padding: 10px;
    color: white;
    cursor: pointer;
}

.trash-svg:active {
    transform: scale(0.9);
}
</style>