<script setup lang="ts">
// リアクティブな値を作成し、イベントで値を加工し、値を受け取り更新する、というのが根本的な考え方
import { ref } from 'vue';

const tweets = ref([
  {
    id: 0,
    description: 'Hello, World',
  },
  {
    id: 1,
    description: 'This is second tweet',
  },
])

const inputtingDescription = ref<string>('')

const postTweet = () => {
  const tweet = {
    id: Math.random(),
    description: inputtingDescription.value,
  }
  tweets.value.push(tweet)
  inputtingDescription.value = ''
  console.log('post...', tweets.value)
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(el => el.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet">post</button>
    </div>
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No Tweets have been added</p>
      <ul v-else>
        <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button class="delete-button" @click="deleteTweet(tweet.id)">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.tweet-list {
  list-style-type: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 10px;
  width: 300px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.save-button:hover {
  background-color: #37dbdb;
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

input {
  margin-bottom: 16px;
}

label {
  font-size: 20px;
  font-weight: bold;
}
</style>