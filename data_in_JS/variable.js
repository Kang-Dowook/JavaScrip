// 1. 변수(variable)
// 변수는 const로 선언하는것을 권장하는것을 공부하다보면 느끼게 될거임
// let과 const의 가장 큰 차이는 const는 재할당이 불가능하단것

let x = 1;
console.log(x); // 1
x = 2;
console.log(x); // 2

const y = 3;
console.log(y); //3
y = 4;
console.log(y); // TypeError

// 일반적으로 변하지 않는 고정된 값은 const로 정의해준다.
// 이를 상수(constant)라고 부른다.
// 날씨, 날짜, 사용자에 따라서 값이 변하는 변수(variable)이지만,
// 검색 결과 이후에 변수는 변하지 않는 상수(constant)가 되어야한다.
// 그래서 const로 var를 정의하는것.
// 상수와 변수의 표기 구분 -> 변수 : myName / 상수 : MY_NAME

// 주의할점
const X = {name: 'Codeit'};
x.birth = 2017;
// 객체는 변수의 주소값이 저장. 메쏘드로 변경하는 것은 그렇다 치더라도 할당연산자로 값을 변경하면
// 값을 재할당하는것으로 오해할 수 있다. 하지만 객체의 프로퍼티나, 배열의 요소가 변경되는 경우는 
// ✨주소값을 변경하는게 아니기 때문에 cosnt 키워드로 변수를 정의했다 하더라도✨
// ✨변수의 값이 변할 수 있다는점 꼭 기억하자✨.


// Variable
// 자바스크립트에서는 variable의 약자를 따서 var라는 키워드로 변수를 선언할 떄가 있었다.
// 자바스크립트에 변수를 선언하는 방식은 처음부터 let과 const가 아니였다
// 그래서 오래된 프로젝트들이나 혹은 자바스크립트의 정보들을 정리해둔 조금 오랜 시간이 지난 블로그들을 살펴보면
// 심심찮게 var 라는 키워드를 만나볼 수 가잇다.
// 이제는 거의 사용되지 않는 var 변수, 그래도 언제 어떻게 만나게 될지 모르니 조금 살펴보자.

// 1) 변수 선언
// 일단 아래 코드처럼 var 변수는 let이나 const 처럼 똑같이 키워드다음에 변수 이름을 써서 선언한다.
let myVariable = 'codeit';

// 2) 중복 선언 허용
// var 키워드로 선언한 변수의 첫 번째 문제는, let과 const와는 다르게 중복 선언이 가능하다.
// 똑같은 이름으로 변수를 한 번 더 선언하게 되면, 에러가 발생하는 것이 아니라
// 그냥 기존의 변수를 덮어써 버리는 것. let 키워드로 선언한 변수에 값을 재할당하는 것과는 엄연히 다르다.

// var myVariable = 'codeit';
// console.log(myVariable); // codeit
// var myVariable = 'Codeit';
// console.log(myVariable); // Codeit

// (내 노트북에서는 에러남...? 버전업되서 그런가..?)
// 이렇게 변수가 중복선언이 되면, 길고 복잡한 코드를 작성할 때 실수를 할 가능성이 커지고,
// 상황에 따라서는 치명적인 오류가 발생할 수 있다.

// 3) 함수 스코프
// var 키워드 변수가 사라진 두 번째 문제는 Scope의 문제 때문이다.
// let 과 const키워드로 선언한 변수는 if, for, fuction 등등 어떤 키워드와 관계없이
// 코드 블록, 즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 되지만,
// var 키워드로 선언한 변수는 scope가 function에서만 구분되어이 있다.
{
  let x = 3;
}

function myFunction() {
  let y = 4;
}
console.log(x); // Uncaught ReferenceError: x is not defined
console.log(y);
// let이나 const 키워드의 경우에는 중괄호로 감싸진 경우라면 모두 중괄호 밖에서는 지역 변수에 접근할 수 없다.

{
  var x = 3;
}

function myFunction() {
  var y = 4;
}
console.log(x); // 3
console.log(y); // Uncaught ReferenceError: y is not defined
// 하지만 var 변수는 지역변수의 구분이 함수에만 있기 때문에 if, for, while, switch 등
// 다양한 상황에서 선언한 변수가 자칫, 지역변수의 역할을 하게 될 수도 있다.

// 참고로 이렇게 함수를 기준으로만 적용되는 스코프를 함수 스코프,
// 코드 블록을 기준으로 적용되는 스코프를 블록 스코프라는 용어를 사용한다는 점도 참고.

// 4) 끌어올림(Hoisting)
console.log(myVariable1); // Uncaught ReferenceError: Cannot access 'myVariable' before initialization
let myVariable1;
// let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없다.

// 하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능
console.log(myVariable2); // undefined
var myVariable2;
// 변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작
// 이렇게 변수가 끌러올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다는 점도 기억!!!
// 다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에
// 값은 그대로 두 번째 줄에 남아있지만,
console.log(myVariable3);
var myVariable3 = 2;
console.log(myVariable3);
// 이런 식으로 동작하는 방식은 코드의 흐름을 방해한다.

// 한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용된다는것.
sayHi()

function sayHi() {
  console.log('hi');
}
// 이렇게 작성해도 결과값으로 hi가 추출.
// 당연한 듯 함수가 잘 실행되는데, 이런 현상은 함수를 한 번 선언하고 나면 어디서든
// 유연하게 사용할 수 있다는 장점이 있지만, 코드의 흐름에는 부정적인 영향을 끼칠 수 있다.
// 그래서 함수를 선언할 때는 가급적 코드 윗부분에 선언하거나, 호출을 항상 아래쪽에서 한다거나
// 나름대로 규칙을 세워서 코드를 작성하기를 권장