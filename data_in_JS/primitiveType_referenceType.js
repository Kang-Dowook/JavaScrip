// 1. 자료형 (Date Type)과 참조형(Reference Type)
// Number, String, Boolean, Null, Undefined -> 기본형(Primitive Type)
// Object -> 참조형(Reference Type)

// 기본형
let x = 3; // -> x라는 상자에 3이라는 값을 넣는다고 생각하면됨.
let y = x; // -> 같은 개념으로 y라는 상자에 x라는 값을 넣고

console.log(x);
console.log(y);
y = 5 // -> y라는 상자에 5라는 값을 넣음.
console.log(x);
console.log(y);

// 객체
let x1 = {name: 'Codeit'}; // x1라는 상자에 객체를 넣었고
let y1 = x1; // y1라는 상자에 x1과 같은 객체값을 넣었다.

console.log(x1);
console.log(y1);
y1.birth = 2017 // y1에 birth라는 객체를 추가해주었다.
console.log(x1); // 그런데 birth가 x1에도 추가됨을 볼 수 있다.
console.log(y1);
// 자바스크립트에서 변수에 '객체'값을 할당할경우 특별하게 동작함.
// 객체값이 어디선가 만들어지고 변수에는 객체로가는 '주소'가 만들어지는 형태이다.
// 쉽게말하면, 객체상자와 변수상자간의 연결 길이 만들어진다.
// 첫 줄에서 x1과 {name: 'Codeit'}간에는 길이 만들어지고
// let y1 = x1에서 y1에 x1과 {nmae: 'Codeit;}의 길이 복사가된것!
// 결국 6번줄에서 birth: 2017이 객체 상자에 추가되며 x1의 값도 같아진것!
// 그래서 객체(Object)나 배열(Array)을 참조형(Reference Type) 타입이라고 부른다.

// 기본형 값을 변수에담아 사용할때는 값이 그대로 할당(변수 = 값)되고,
// 참조형 값을 변수에담아 사용할때는 해당 개게르 가르키는 주소값(변수 = 주소값)이 할당된다.
// 결국, 참조형은 변수를통해 다른변수를 할당하면 값 자체가 복사되는 것이 아니라 주소값이 복사되기 때문에
// 결국에는 같은 객체를 가르키게되고 결과적으로 한 쪽을 수정하면 다른 쪽도 수정된다.
// 다른언어에도 똑같이 적용된다.

// Quiz!!!
let x2 = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
let y2 = x2.numbers;
let z = x2.title;
 
x2.numbers.unshift(5);
x2.title = 'Hello';

console.log(y2);
console.log(z);
// 결과값
// [5, 1, 2, 3, 4]
// Codeit
// x2의 numbers 프로퍼티를 변수 y에 할당하는데, ✨numbers 프로퍼티의 값이 배열이기 때문에✨
// 배열이 그대로 변수 y에 할당되는 것이 아니라 주소 값이 할당된다.
// 즉, x2.numbers와 변수 y가 같은 밸열을 가리키게되는것.
// x2의 title 프로퍼티를 변수 z에 할당하고 있는데, title 프로퍼티의 값은 기본형 값이기 때문에
// 값이 그대로 복사된다. 즉, x2.title과 변수 z는 서로 같은 값이지만, 서로 독립적인 관계.
// x2.title을 변경해도 변수 z와는 서로 독립적이기 때문에 값의 변화가 없다.


// 2. 참조형 복사하기 ( Reference Type Copy )
let number1 = [1, 2, 3];
let number2 = number1.slice();
// number1, 2 둘다 참조형이기에 배열의 주소값을 가지고
// number2만 변경하여도 둘다 동일하게 배열의 값이 변경
// 하지만, number2만 변경하고 싶은 경우도 있을 것이다. 이때 slice메쏘드를 이용한다.

number2.push(4);
// 그러면 number2만 값이 변한다.

console.log(number1);
console.log(number2);

// 객체는?
let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = Object.assign({}, course1);
// 객체는 Object라는 객체에 assign 메쏘드를 사용하면 복사할 수 있다.
course2.title = '알고리즘의 정석';

// for in문으로 복사하기
let course3 = {};

for (let key in course1) {
  course3[key] = course1[key];
}

course3.title = '자료 구조';

console.log(course1);
console.log(course2);
console.log(course3);

// 위의 for in 반복문을 함수로 만들면
function cloneObject(object) {
  let temp = {};

  for (let key in object) {
    temp[key] = object[key];
  }
  return temp;
};
// 형태로 만들 수 있다. 이제 파라미터 값으로 course1을 넣으면 계속해서 복사값을 만들 수 있다.
// 하지만, course1에 배열과 같은 또다른 참조값이 들어가게되면 다시 주소값이 복사된다.

// 이러한 문제를 하기위해서는 함수를 수정하여아하는데
function cloneObject1(object) {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  let temp;
  if (Array.isArray(object)) {
    temp = [];
  } else {
    temp = {};
  }

  for (let key of Object.keys(object)) {
    temp[key] = cloneObject1(object[key])
  }

  return temp;
};
// 이렇게 정의하면 해결될 수 있지만, 아직 모르는 내용이있기에 참조형 안에 참조형은
// 주소값이 또 복사될 수 있으니 주의해서 사용하자.