<script setup lang="ts">
import { ref, Ref } from 'vue'

import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';

export type Person = {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([
  {
    id: 0,
    name: 'John',
    age: 24,
  },
  {
    id: 1,
    name: 'Mike',
    age: 26,
  },
])

const registerPerson = (person: Person) => {
  persons.value.push(person)
}

const deletePerson = (id: number) => {
  persons.value = persons.value.filter(el => el.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Title</h1>
    <!-- 子コンポーネントのregisterイベントを検知したらregisterPersonイベントが発火する -->
    <PersonPostForm
      @register="registerPerson"
    />
    <div class="list-container">
      <PersonList
        :persons="persons"
        @delete="deletePerson"
      />
    </div>
  </div>
</template>

<script scoped>
</script>