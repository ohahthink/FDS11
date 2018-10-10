// ### 문제 1

// 두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.

// 정답 :
// function larger(a,b){
//     if(a>b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }
// larger(9,10);

// ### 문제 2

// 세 수를 입력받아 그 곱이 양수이면`true`, 0 혹은 음수이면`false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

// 정답 :
// function larger(a,b,c){
//     if(a*b*c > 0){
//         console.log(true);
//     }else if(a*b*c !== 0){
//         throw new Error('입력값이 잘못되었습니다.');
//     }else{
//         console.log(false);
//     }
// }
// larger(2,-3,'4');

// 에러를 발생시키는 코드는 다음과 같습니다.

// ```js
// throw new Error('입력값이 잘못되었습니다.');
// ```

// ### 문제 3

// 세 수`min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
// - `min`보다`input`이 작으면, `min`을 반환합니다.
// - `max`보다`input`이 크면, `max`를 반환합니다.
// - 아니면`input`을 반환합니다.

//     예:
// ```
// limit(3, 7, 5); -> 5
// limit(3, 7, 11); -> 7
// limit(3, 7, 0); -> 3
// ```

// 정답 :
// function limit(min, max, input){
//     if(min > input){
//         console.log(min);
//     }
//     else if(input > max){
//         console.log(max);
//     }
//     else{
//         console.log(input);
//     }
// }
// limit(3, 7, 5);
// limit(3, 7, 11);
// limit(3, 7, 3);

// ### 문제 4

// 어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요.이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

// 정답 :
// function evenOdd(num){
//     if(num % 2 === 0){
//         console.log('even');
//     }else{
//         console.log('odd');
//     }
// }
// evenOdd(4);

// ### 문제 5

// 100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

// 정답 :
// for(i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }else if(i % 5 === 0){
//         console.log(i);
//     }
// }

// ### 문제 6

// 자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

// 정답 :
// function divsor(num){
//     for(i = 0; i <= num; i++){
//         if(num % i === 0){
//             console.log(i);
//         }
//     }
// }
// divsor(6);

// ### 문제 7

// 2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

// // 정답 :
// function prime(num){
//     for(i = 2; i <= num; i++){
//         if(num % i === 0){
//             console.log('prime');
//         }else{
//             console.log('notPrime')
//         }
//     }
// }
// prime(6);

// 풀이 : 판별하는 함수 = 불리언값, true인지 false인지 알아내라는 의미
function isPrime(x) {
    // return 루프가 있던 없던 함수를 빠져나갑니다
    // 소수: 1과 자기자신밖에 약수가 없는 수
    // > 1과 자기자신이 아닌 약수가 하나라도 있으면 소수가 아니다.
    for (let i = 2; i < x; i++) {
        if(x % i === 0) {
            return false
        }
    }
    return true
}



// ### 문제 8

// 1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

// ### 문제 9

// 양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

// 1을 입력받은 경우:
// ```
// *
// ```

// 3을 입력받은 경우:
// ```
// *
// * *
// * * *
// ```

// 5를 입력받은 경우:
// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

// 풀이 : 문제 잘보면 별 사이에 공백이 있습니다 !
// 중첩루프 이용법
// function print(height) {
//     for (let i = 0; i < height; i++){
//         // 한 줄 출력
//         let stars = ''
//         for (let j = 0; j < i + 1; j++){
//         // 별 표 하나를 출력
//         stars += '* '
//         }
//         console.log(stars);
//     }
// }
// print(5);

// repeat을 이용한 방법
// function print(height) {
//     for (let i = 0; i < height; i++){
//         // 한 줄 출력
//         console.log('*'.repeat(i + 1))
//     }
// }
// print(5);


// ### 문제 10

// 양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

// 1를 입력받은 경우:
// ```
// *
// ```

// 3를 입력받은 경우:
// ```
//   *
//  * *
// * * *
//  * *
//   *
// ```

// 5를 입력받은 경우:
// ```
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// ```


// 풀이 : i가 꼭 커질 필요는 없어요


// function print(height) {
//     for (let i = 0; i < height; i++) {
//         const n = i + 1;
//         const line = ' '.repeat(height - n) + '* '.repeat(n)
//         console.log(line)
//     }
//     for (let i = height - 2; i >= 0; i--) {
//         const n = i + 1;
//         const line = ' '.repeat(height - n) + '* '.repeat(n)
//         console.log(line)
//     }
// }

// print(3)


// 재사용성을 고려한 풀이 : 코드뭉치를 묶어서 재사용하기 위한 단위 = 함수 , 즉 함수로 묶어서 재사용할 수 있습니다

function printLine(height, i) {
    const n = i + 1;
    const line = ' '.repeat(height - n) + '* '.repeat(n)
    console.log(line)
}


function print(height) {
    for (let i = 0; i < height; i++) {
        printLine(height, i)
    }
    for (let i = height - 2; i >= 0; i--) {
        printLine(height, i)
    }
}

print(3)


// ### 문제 11

// 두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

//     ### 문제 12

// 세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

//     ### 문제 13

// 자연수`n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.
