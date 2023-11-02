<script setup>
import { ref } from 'vue';
import CreateList from '../CreateList/CreateList.vue';
import TodoList from '../TodoList/TodoList.vue';
import DialogEmptyText from '../DialogEmptyText/DialogEmpyText.vue';

let id = 0;

const newTodoValue = ref('');

const visible = ref(false);

const todoListDataBase = ref([
    {
        id: id++,
        text: 'TodoList Test'
    }
]);

function newTodo() {
    if (!newTodoValue.value) {
        visible.value = true
        return
    }
    todoListDataBase.value.push({
        id: id++,
        text: newTodoValue.value
    })
};

function deleteTodo(todo) {
    todoListDataBase.value = todoListDataBase.value.filter((t) => t !== todo)
}

</script>


<template>
    <main id="todo-list">
        <DialogEmptyText :visible="visible" @close="(msg) => visible = msg"/>
        <div class="container root-todo">
            <header class="header">
                <h1 class="title-header">TodoList</h1>
            </header>
            <CreateList @todovalue="(msg) => newTodoValue = msg" :newTodo="newTodo" />
            <TodoList :dataBase="todoListDataBase" :deleteTodo="deleteTodo" />
        </div>
    </main>
</template>

<style scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.header {
    text-align: center;
}

.root-todo {
    min-height: 50vh;
    background-color: white;
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#todo-list {
    min-height: 100vh;
    padding-top: 20px;
    background: linear-gradient(-45deg, rgb(230 52 83) 28%, rgba(34, 193, 195, 1) 75%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
}
</style>