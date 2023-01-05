<script setup lang="ts">
// ref -> 変数(単一の値)をリアクティブな値に変更する
// reactive -> オブジェクトをリアクティブな値に変更する
// computed ->
// watch ->
// toRefs ->
import { ref, reactive, computed, watch, toRefs } from 'vue'

// const itemName1 = 'Desk'
// リアクティブな値に変更する
// const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'

// const price1 = 40000
const price2 = 20000

const url1 = 'https://www.google.com/?hl=ja'

const item1 = reactive({
  name: 'Desk',
  price: 40000,
})

const buy = (itemName: string) => {
  alert('Are you sure to buy ' + itemName + '?')
}

// 変数の値が変わった(リアクティブな値)段階で再度テンプレートを読み込む処理が必要となる
// v-model を使用することで双方向の値を変化させることができる -> 関数は不要
// const input = (event: any) => {
//   // console.log('event:', event.target.value)
//   // itemName1.value = event.target.value
//   item1.name = event.target.value
// }

// const inputPrice = (event: any) => {
//   // console.log('event:', event.target.value)
//   // itemName1.value = event.target.value
//   item1.price = event.target.value
// }

const clear = () => {
  item1.name = ''
  item1.price = 0
}

const budget = 50000

// VueではTemplate 内にあまりロジックを持たせないのが原則
// Vueでは値を加工したい場合には computedを使用する（関数を使用するより最適化できる）
// const priceLabel = computed(() => {
//   return (item1.price > budget) ? 'too expensive...' : `${item1.price} yen`
// })

// Watchを使用する場合 -> computedの方がシンプル
const priceLabel = ref<string>(`${item1.price} yen`)
// リアクティブなオブジェクトをwatchする場合以下の処理が必要
const { price } = toRefs(item1)
watch(price, () => {
  return (price.value > budget) ? priceLabel.value = 'too expensive...' : `${price.value} yen`
})
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>

    <input v-model="item1.name">
    <!-- <input v-on:input="input" v-bind:value="item1.name" /> -->
    <input v-model="item1.price" />
    <!-- <input v-on:input="inputPrice" v-bind:value="item1.price" /> -->

    <button v-on:click="clear()">Clear</button>
    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ priceLabel }}</label>
      <a v-bind:href="url1">bought at...</a>
      <button v-on:click="buy(item1.name)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }}</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 400px;
  margin-bottom: 8px;
  /* background-color: aliceblue; */
}
label {
  font-size: 20px;
}
</style>