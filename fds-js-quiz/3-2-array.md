문제 1. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
max([3, 1, 4, 5, 2]) // -> 5
```

---

문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

---

문제 3. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)


예:

```js
flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

풀이 : 

```js
function flatten(arr) {
    // 누적값: 지금까지 본 배열이 다 이어붙여진 새 배열
    // 초기누적값으로 빈배열을 준다
    // 지금까지 본 배열이 다 이어붙여져 있으려면 본만큼이 누적값이여야한다
    // concat은 배열을 이어붙인 것을 새배열로 반환하는 메소드
    arr.reduce((acc, innerArr) => acc.concat(innerArr), [])
}

flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
```


---

문제 4. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

---

문제 5. (3 * 3) 빙고 판을 표현한 배열을 입력받아, 빙고인 경우 `true`, 아니면 `false`를 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 칸이 채워져 있는 경우는 1로 표현합니다.)

<!-- https://repl.it/@hyebiKIM/MonthlyFormalQuery -->

예:

```js
bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> false

bingo([
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> true

bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1]
]) // -> true
```

---

문제 6. (9 * 9) 오목 판을 표현한 배열을 입력받아, 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

<!-- 오목판이 있으면  -->

예:

```js
omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]) // -> 0

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 1, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]) // -> 2
```

---

문제 7. 배열을 입력받아, 요소 중 아무거나 하나를 골라서 반환하는 함수를 작성하세요.

예:

```js
randomItem([1, 2, 3, 4, 5]) // 1, 2, 3, 4, 5 중 아무거나 반환
```

---

문제 8. 배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요. (단, 원본 배열이 변경되어서는 안 됩니다.)

예:

```js
shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 5, 2] 와 같이 순서가 뒤섞인 새 배열 반환
```