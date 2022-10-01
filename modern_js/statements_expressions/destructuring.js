// 구조 분해 (Destructuring)

// 구조 분해는 배열과 객체에 적용하는 방식이 각각 다르다.
// 배열에 적용하는 방식
const rank = ['효준', '유나', '민환', '재하'];

// 일반적인 방법
// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank[3]

// 구조분해(배열)
const [macbook, ipad, airpods, ...coupon] = rank; // 배열을 변수에 할당되게 하는 방법
// 배열의 인덱스가 변수의 갯수는 중요하지 않다. 순서대로 할당되기 때문.
// 변수의 순서와 배열의 순서가 중요하다.
// 마지막 요소를 레스트 파라미터처럼 사용하면 남은 변수들의 값을 마지막 요소에 할당하는게 가능
// 변수가 배열의 요소보다 적을경우 undefined 가 기본적으로 할당되는데, 기본값을 설정할 수 있다.
// ex ) coupon = '없음'

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);

// 배열의 구조분해는 변수에 할당된 값을 서로 교환할때도 활용할 수 있다.
let macbook1 = '효준';
let ipad1 = '유나';

[macbook1, ipad1] = [ipad1, macbook1]// 오른쪽 값을 왼쪽 피연산자에 할당

console.log('MacBook 당첨자', macbook1);
console.log('iPad 당첨자', ipad1);

// const macbook = {
//   title: '맥북 프로 16형',
//   price: 3690000,
//   memory: '16 GB',
//   storage: '1TG SSD 저장 장치',
//   display: '16형 Retina 디스플레이',
// };

// ### 객체를 활용한 구조분해
// 객체는 인덱스가 아닌 프로퍼티 네임을 통해 구분
// 프로퍼티 네임을 변수처럼 사용할때 구조 분해를 활용

const macbookObject = {
  title: '맥북 프로 16형',
  price : 3690000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16gud Retina 디스플레이',
  'serial-num' : 'ABCDEFGHIJKL',
};

const {title, ...rest} = macbookObject;
// 할당연산자 오른쪽에서 할당연산자 왼편의 변수 이름과 똑같은 프로퍼티 네임이 있다면, 변수 이름에 그 값이 할당되는 방식
// 객체에 존재하지 않는 프로퍼티 네임으로 변수가 선언되어 있으면 undefined 값이 할당.
// 할당연산자를 통해 기본 값을 지정해줄 수 있다.
// ...마침표 3개를 활용하면 남은 프로퍼티들을 모아서 하나의 객체로만들어 ...변수에 할당한다.

const {memory: perfomance, 'serial-num': serialNum} = macbookObject;
// 나머지를 모아 객체로 만드는 변수를 제외하고는 전부 이름이 같아야 하는 것은 아니다.
// memory의 프로퍼티 네임이 performance로 변경된거임.
// memory: perfomance 이 부분도 하나의 프로퍼티라고 생각하고 프로퍼티 네임이 위의 객체와 일차하는 것을 찾아서
// 해당하는 값을 할당한다고 이해하면 쉽게 익숙해 질 수 있을것이다.

// 새로운 이름으로 변수를 선언하는 방식이 꼭 필요한 경우가 있다.
// 객체 내부의 프로퍼티 네임이 변수로 사용할 수 없는 경우가 있다. 위의 'serial-num' 처럼
// ''안의 -(하이픈) 때문에 변수이름으로 사용할 수 없는 경우, 변수를 새로운 이름으로 변경하여 사용할 수 있다.

const propertyName = 'title';
const {[propertyName]: product} = macbookObject;
// 새로운 이름으로 변수를 선언하는 방식은 대괄호를 통해서 컴피티드 프로퍼티 네임을 활용할 수 있다.

console.log(title);
console.log(rest);
console.log(perfomance);
console.log(serialNum);
// 객체 구조분해는 리액트에서 적극적으로 사용하는 문법이기 때문에 반복해서 익혀두자.


// ### 구조분해(Destructuring) 함수와 사용하기.
function getArray() {
  return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();
// 함수가 리턴하는 값이 배열일때 그 배열을 활용하기

console.log(el1);
console.log(el2);
console.log(el3);

function printWinners(...arg) {
  const [macbook, ipad, airpods, ...coupon] = arg;

  console.log('이벤트 결과를 알려드립니다!');
  console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
  console.log(`아이패트의 주인공은 '${ipad}'님입니다..`);
  console.log(`에어판의 주인공은 '${airpods}'님입니다..`);
  console.log(`코드잇 3개울 수강권 주인공은.`);
}

for (let user of coupon) {

}