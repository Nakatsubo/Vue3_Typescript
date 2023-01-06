<script setup lang="ts">
import { ref } from 'vue'

// ここがわからない　そういうもの？　親から子への値渡しではなく？
// Form.vueから値をmodelValueで受け取る
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isActiveButton = ref<string>(props.modelValue)
const onClick = (buttonType: string) => {
  isActiveButton.value = buttonType
  emit('update:modelValue', isActiveButton.value)
}
</script>

<template>
  <ul>
    <li><button :class="{active: isActiveButton === 'bad'}" @click="onClick('bad')" type="button">Bad</button></li>
    <li><button :class="{active: isActiveButton === 'Average'}" @click="onClick('Average')" type="button">Average</button></li>
    <li><button :class="{active: isActiveButton === 'Grate'}" @click="onClick('Grate')" type="button">Grate</button></li>
  </ul>
</template>

<style scoped>
.active {
  color: rgb(216, 88, 110);
}

ul {
  list-style: none;
  margin: 0.5em 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid gray;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>