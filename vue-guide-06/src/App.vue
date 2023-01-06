<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import { provide } from 'vue';
import { todos, addTodo, todokey } from './useTodo'

// provide('todos', todos)
// provide('addTodo', addTodo)
// todokeyを使ってtodosをインジェクトする
provide(todokey, todos)
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
