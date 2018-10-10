### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```js
function circle(num) {
  if(num >= 0) {
    return (num **= 2) * Math.PI
  }
}

circle(3)
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```js
function middle(min, max) {
  for (let i = min; i < max; i++) {
    console.log(i)
  }
}

middle(3, 10)
```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

```js

function ceilby5(input){
  return Math.ceil(input / 5) * 5  
}

// 반올림은 ceil대신 round로 바꿔주세요
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.

```js

function shuffle(input) {
  const newArr = []
  if ( )
  return newArr
}

shuffle([1, 2, 3, 4, 5])

```


### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

```js
function randomColor() {
  const candidate = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(candidate.length * Math.random())
    color += candidate[randomIndex]
  }
  return color
}
```

```js
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

```js
function randomString(n) {
  const candidate = '1234567890!@#$%^&*()abcdefg'
  let result = ''
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * candidate.length)
    result += candidate[randomIndex]
  }
  return result
}
```

```js
function randomString(n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += String.fromCodePoint(Math.floor(Math.random() * 65536))
  }
  return result
}
```
### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

```js
function stdDev(arr) {
  // arr의 평균 구하기
  const sum = arr.reduce((acc, item) => acc + item, 0)
  const mean = sum / arr.length
  console.log(`mean: ${mean}`)
  // 각 요소에 대한 편차 구하기 (편차 = 값 - 평균)
  const ps = arr.map(item => item - mean)
  console.log(`ps: ${ps}`)
  // 각 요소에 대해 제곱하기
  const powers = ps.map(item => item ** 2)
  // 위 제곱한 배열의 평균 구하기
  const vv = powers.reduce((acc, item) => acc + item, 0) / powers.length
  // 루트 씌우기
  return Math.sqrt(vv)
}

stdDev([1, 2, 3, 4, 5])

```