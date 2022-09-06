// while문 (while statement)
// if문과 유사한 형태
// 조건부분이 충족되지 않을때 까지 동작부분을 반복

// while (조건부분) {
//   동작부분
// }

let i = 1; // while문은 초기화 부분이 없어 글로벌 변수로 지정해줘야됨

while (i <= 10) {
  console.log(`${i} 코드잇 최고!`)
  i++;
}

// for문과 비교
for (i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`)
}

let j = 30;

while (j % 7 !== 0) {
  j++
}

console.log(j);
// for문은 조건비교에 사용되는 값을 반복문 내부에서만 사용하고, 
// 반복이 끝나면 외부에서 사용할 수 없다.
// 글로벌변수를 조건비교에 사용하고 반복문 내부에서도 다루면서 결과적으로 반복문이 종료되었을때도
// 변수를 사용할때는 while문이 좋다.
// for문보다 빈도는 적지만 상황에 따라 사용하면 좋다.

// 실습문제 : while문으로 100이하 홀수 추출하기

// 첫번째 방법
let num1 = 1;

while (num1 <= 100) {
  if (num1 % 2 === 1) {
    console.log(num1);
  }
  num1++;
}
// for문이나 if문처럼 조건 부분을 수정해서 추출하는 것이 힘들었다.
// 조건 부분에 && num1 % 2 !== 0을 대입했을 때, 결과 값이 1 밖에 나오질 않았다.

// *** 결론 : while문과 for문의 조건 값에는 차이가 있다. for문의 경우 범위 내에서 맞는 값들만 추출 하는것이고
// while문의 경우 조건값이 true인 동안에만 동작한다.
// 그래서 조건 값을 추가하였을때 1은 true여서 동작하였지만, 2는 false였기에 그 이후로는 동작이 멈춘것이였다. 

// 두번째 방법
let num2 = 1;

while (num2 <= 50) {
  console.log(num2 * 2 - 1);
  num2++;
}
// console에 결과 값을 연산한 값 넣기.

// 세번째 방법
let num3 = 1;

while (num3 <= 100) {
  console.log(num3);
  num3 += 2;
}
// 초기 결과값을 맞게 설정 후 num3값을 +2하기.

// 실습문제 : 약수 찾기

const N = 180;
let num4 = 1;
let count = 0 

while (num4 <= N) {
  if (N % num4 === 0) {
    console.log(num4)
    count++
  }
  num4++
}
console.log(`${N}의 약수는 총 ${count}개입니다.`)