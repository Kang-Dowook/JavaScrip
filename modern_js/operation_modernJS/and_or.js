// ### 1. 논리 연산자인 AND와 OR 연산 방식
console.log(true && true); // 자바스크립드에서 AND 연산자는 왼쪽값이 truthy하면 오른쪽 값을 리턴
console.log(true && false);
console.log(false && true); // 왼쪽값이 Falsy하면 왼쪽값을 리턴하는 방식으로 작동한다.
console.log(false && false);
console.log('Codeit' && 'JavaScript'); // 그래서 왼쪽값이 Truthy한 값이기에 오른쪽 값을 리턴.

console.log(true || true); // 자바스크립드에서 OR 연산자는 왼쪽값이 truthy하면 왼쪽 값을 리턴
console.log(true || false);
console.log(false || true); // 왼쪽값이 Falsy하면 오른쪽값을 리턴하는 방식으로 작동한다.
console.log(false || false);
// AND와 OR의 연산 리턴방식은 정반대!!!

console.log(null && undefined); //null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}

function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print();
print('JavaScript');
// 전달한 값이 없다면 'Codeit'을 값을 전달했다면 '전달된 값'을 출력하게 조건식 처럼쓸 수 있다.

// ### 2. AND와 OR 연산자의 연산 우선순위
// AND와 OR 연산자 사이에서는 AND 연산자의 우선순위가 더 높다.
function checkAnswer(value) {
  if (value < 10 && value > 0 && value !== 3) {
    return '정답입니다!';
  } 

  return '틀렸습니다!';
}

console.log(checkAnswer(4)); // 정답입니다

// 이렇게 AND 연산자나 OR 연산자 중 하나만 계속해서 사용할 때는 문제가 없지만,
// AND와 OR 연산자를 섞어 사용할 때는 연산의 우선순위가 존재하기 때문에 명확하게 해줘야 한다.
// 그리고 AND와 OR 연산자 뿐만 아니라 다양한 연산자들을 복합적으로 사용하게 될 텐데,
// 연산의 우선순위를 명확하게 하지 않으면 예상치 못한 결과를 얻을수 있으니 잘 구분해두는 것이 중요.
console.log(true || false && false); // true
console.log((true || false) && false); // false

console.log('Codeit' || NaN && false); // Codeit
console.log(('Codeit' || NaN) && false); // false

// 특히, 여러 사람들과 함께 협업하는 상황에서 다양한 연산자들을 복합적으로 사용해야 한다면
// 소괄호를 활용해서 의도에 맞는 연산 우선순위를 명확하게 표기하는 것이 좋은 습관이다.
// 좋은 습관 예
console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log('Codeit' || (NaN && false)); // Codeit
console.log(('Codeit' || NaN) && false); // false

// ### 3. ES2020에서 새롭게 추가된 null 병합 연산자. 영어로는 Nullish coalescing operator.

// ### 1)null 병합 연산자 ??
// 물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자.
const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';

console.log(example1, example2, example3); // ?

// example1과 2를 보면 지금 null 병합 연산자 왼편에 각각 null과 undefined가 있다.
// 이렇게 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴.
// example3 처럼 연산자 왼편의 값이 null이나 undefined가 아니라면 연산자 왼편의 값이 리턴.
// 출력 결과 : I love Codeit

// ### 2) OR 연산자(||)와 비교

// OR 연산자(||)와 동작하는 방식이 비슷해 보인다. 실제로 다음과 같은 상황이라면 똑같이 동작
const title1 = null || 'codeit';
const title2 = null ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // codeit

// 하지만 null 병합 연산자(??)는 왼편의 값이 null이나 undefined인지 확인하고
// OR 연산자(||)는 왼편의 값이 falsy인지를 확인하기 때문에
// 아래 코드와 값이 null이나 undefined가 아닌 falsy 값을 활용할 때 결과가 서로 다르다.
const title3 = false || 'codeit';
const title4 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0