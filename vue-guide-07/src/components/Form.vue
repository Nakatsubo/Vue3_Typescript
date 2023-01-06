<script setup lang="ts">
import { DirectiveBinding, ref, watch } from 'vue'
import Raiting from './Raiting.vue'

const userName = ref<string>('')

// カスタムディレクティブ
// 独自にディレクティブを定義してHTMLElementに付与することができる
// v-focus
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus()
    // console.log('mounted')

    if (binding.modifiers.alert) {
      el.style.backgroundColor = 'pink'
    }
  }
}

// モディファイア
// ディレクティブに対して追加して振る舞いを追加する
const onSubmit = (e: any) => {
  // e.preventDefault()
  // console.log('userName ', userName.value)
  // console.log('submit')
  // console.log('from', from.value)
  // console.log('radios', radios.value)
  console.log('ratings', ratings.value)

}

// フォーム系
const from = ref<string>('China')
// 一括選択ができる
// const interest = ref<boolean>(false)
const interest = ref([])

watch(interest, () => {
  console.log('interest', interest.value)
})

const radios = ref([])

// v-model カスタムコンポーネント
const ratings = ref<string>('')

</script>

<template>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input v-model.trim="userName" id="user-name" name="user-name" type="text" v-focus.alert />
    </div>
    <div class="form-control">
      <label for="age">Your Age</label>
      <input id="age" name="age" type="number"  />
    </div>
    <div class="form-control">
      <label for="from">Where Are you from?</label>
      <select id="from" name="from" v-model="from">
        <option value="japan">Japan</option>
        <option value="china">China</option>
        <option value="others">Others</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-react" name="interest" type="checkbox" value="react" v-model="interest" />
        <label for="interest-react">React.js</label>
      </div>
      <div>
        <input id="interest-vue" name="interest" type="checkbox" value="vue" v-model="interest" />
        <label for="interest-vue">Vue.js</label>
      </div>
      <div>
        <input id="interest-angular" name="interest" type="checkbox" value="angular" v-model="interest" />
        <label for="interest-angular">Angular.js</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="videos" v-model="radios" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-books" name="how" type="radio" value="books" v-model="radios" />
        <label for="how-books">Books</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="radios" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <Raiting
      v-model="ratings"
    />
    <div>
      <button @click.prevent="onSubmit">Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>