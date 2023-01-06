<script setup lang="ts">
import { computed, ref } from 'vue'
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])
const register = () => {
  const person = { id: Math.random(), name: inputtingName.value }
  console.log('person...', person)
  emit('register', person)
}


// バリデーション
const nameLengthLimit = 15

const isValidName = computed(() => {
  if (inputtingName.value.length >= nameLengthLimit) {
    return false
  } else {
    return true
  }
})

const color = computed(() => {
  return isValidName.value ? '#fff' : 'rgb(244, 194, 190)'
})
</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name:</span>
        <input class="input-name" v-model="inputtingName" />
      </div>
      <span v-if="!isValidName" class="error-message">{{ nameLengthLimit }} charactor or less, please</span>
      <div class="input-column">
        <span>age:</span>
        <input class="input" v-model="inputtingAge" type="number" />
      </div>
    </div>
    <button :disabled="!isValidName" @click="register" class="register-button">register</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 241, 226);
  padding: 24px;
  width: 50%;
  margin: 0 auto 12px;
  border-radius: 4px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
}

.input-column {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

input {
  width: 120px;
  margin-bottom: 8px;
}

.input-name {
  background-color: v-bind(color);
}

.error-message {
  font-size: 12px;
  color: rgb(244, 194, 190);
}

span {
  font-size: 20px;
  font-weight: bold;
}
</style>