<script setup lang="ts">
import { defineProps } from 'vue'

type Tweet = {
  id: number,
  description: string,
}

type Props = {
  tweets: Tweet[]
}

// コンポーネントから親コンポーネントへイベントを伝播させる
const emit = defineEmits(['delete-tweet'])
const deleteTweet = (id: number) => {
  emit('delete-tweet', id)
}

// 親コンポーネントが定義した変数を子コンポーネントが使用するだけ
// 子コンポーネントが値をPropsとして受け取る
defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
      <span>{{ tweet.description }}</span>
      <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
    </li>
  </ul>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 20px;
  width: 300px;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.delete-button:hover {
  background-color: #ac783f;
}
</style>