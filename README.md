## スプレッド構文
配列の中身を展開して出力する

```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const result = [array1, array2]
console.log(result);
-> [[1, 2], [3, 4]]

// スプレッド構文
const result = [...array1, ...array2];
console.log(result);
-> [1, 2, 3, 4]

// オブジェクト型の場合
const person = {
  name: 'john',
  age: 22,
}
const result = {...person, height: 180};
console.log(result);
->
[object Object] {
  age: 22,
  height: 180,
  name: "john"
}
```

## レスト構文

```javascript
const arr = [1, 2, 3, 4, 5]
const [a, b, ...c] = arr

console.log(a, b, c)
->
1
2
[3, 4, 5]

// オブジェクト型の場合
const obj = { a: 1, b: 2, c: 3, x: 10 }
const { x, ...props } = obj
console,log(x, props)
->
10
[object Object] {
  a: 1,
  b: 2,
  c: 3
}
```

### 高階関数
>高階関数を一言で表すと、「関数を引数、戻り値として扱う関数」のことです。
[JavaScript 高階関数を説明するよ](https://qiita.com/may88seiji/items/8f7e42353b6904af5e9a)
