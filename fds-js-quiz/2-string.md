### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```

### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.



예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```

### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

<!-- 문자열도 idnex로 접근 가능합니다, 배열로 바꿀필요없어요 -->

function isPalidrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
isPalidrome('토마토마토')




### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

function removeDuplicates(str) {
  let memory = '';
  for (let i = 0; i < str.length; i++) {
    if (memory.includes(str[i]) !== true) {
      memory += str[i];
    }
    else{
      continue;
    }
  }
  console.log(memory)
}
removeDuplicates('tomato')

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

<!-- 
> 노트 = 저장장치고, 노트에 쓰는 사고 = 내가 왜 쓰고있지?

새로 글씨를 쓸 빈칸을 만들어둔다 - 변수
아직 @을 본적 없다는 사실을 기억해 둔다 - 변수
입력받은 문자열을 한 글자씩 본다 - for문
만약에 아직 @을 본적이 없다면 *을 쓴다 -
아니면 @을 본적이 있다면 위에서 본 글씨를 그대로 쓴다 -


-->


- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

<!-- 
값을 입력받는다
변환한 문자를 담아줄 공간을 만든다
입력값의 문자가 대문자인지 비교했을때 true이면 소문자로 변환한다
입력값의 문자가 소문자인지 비교했을때 false이면 대문자로 변환한다
변환한 문자를 만들어두었던 공간에 추가한다
변환한 문자를 넣어두었던 공간을 반환한다 
 -->
```js
function swapCase(input) {
    let memory = '';
    for (let i = 0; i < input.length; i++){
        if (input[i].toUpperCase() === input[i]){
            memory += input[i].toLowerCase()
        }else {
            memory += input[i].toUpperCase()
        }
    }
  return memory
}

swapCase('ToMaTo');
```
### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

<!-- 
값을 입력받는다
반환할 저장소를 만든다
단어 단위로 자른다, 단어는 공백으로 나누어진다
단어의 첫글자가 대문자인지 비교했을때 false면 
-->
```js

// 배열을 사용하지 않고, 루프를 사용해서 풀기

function capitalize(input) {
  let seenBlank = true
  let memory = ''

  for (let i = 0; i < input.length; i++) {
    if (seenBlank) {
      memory += input[i].toUpperCase()
    } else {
      memory += input[i]
    }

    if (input[i] === ' ') {
      seenBlank = true
    } else {
      seenBlank = false
    }
  }

  return memory
}

capitalize('i am hungry')


// 배열 메소드를 사용해서 풀기
const capitalize = input => input.split(' ')
  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
  .join(' ')

capitalize('i am hungry')

```


### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)



```js
//  아이디어 : 한 글자씩 보면서, 지금까지 봤던 단어중에 "제일 긴" "단어"를 기억해둔다.
function longestWord(input) {
  let longest = '' // 지금까지 봤던 단어 중에 제일 긴 단어
  let current = ''// 내가 지금 보고 있는 단어
  //한 글자씩 보기
  for (let i = 0; i < input.length; i++) {
    //내가 지금 보고 있는 글자가 공백이 아니면
    if (input[i] !== ' ') {
      current += input[i]
      if (current.length > longest.length) {
        longest = current
      }
    }else {
      // 내가 지금 보고 있는 글자가 공백이면
      // current를 처음부터 다시 시작
      current = ''
    }
  }
  return longest
}

longestWord('hello fun javascript')

// 배열 메소드를 사용한 경우

function longestWord(input) {
  const splitted = input.split(' ')
  splitted.sort((x, y) => y.length - x.length)
  return splitted[0]
}

longestWord('javascript hah hehe asdfsefsdfsdf')

```



### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

```js
function firstLetters(s, n) {
  //slice사용해도 됩니다
  if (s.length < n) {
    return s
  }
  // 내가 한 글자씩 보면서 어디까지 봤는지 기억을 하고 있으면서
  let memory = ''
  for (let i = 0; i < s.length; i++) {
    memory += s[i]
    //내가 지금까지 본 문자의 길이가 n과 같으면 반환한다
    if (memory.length === n) {
      return memory
    }
  }
}

firstLetters('hello', 8) // > hel
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
// 아이디어: 한 글자씩 보면서, 첫 글자가 아닌 대문자를 만났을 경우 바로 앞에 밑줄을 쳐준다.
function toSnakeCase(input) {
  let memory = ''
  for (let i = 0; i < input.length; i++) {
    // 만약, 첫 글자가 아닌 대문자를 만났을 경우
    if (i !== 0 && input[i].toUpperCase() === input[i]) {
      memory += '_'
    }
    memory += input[i].toLowerCase()
  }
  return memory
}

toSnakeCase('JavaScript')
```

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

```js
function split(input, sep) { // 'separator' 구분자
  // 현재 보고 있는 단어
  let memory = ''
  let arr = []
  for (let i = 0; i < input.length; i++) {
    if(input[i] !== sep) {
      memory += input[i]
    }else {
      arr.push(memory)
      memory = ''
    }
  }
  arr.push(memory)
  return arr
}

split('hello,fun,javascript', ',')
```

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
