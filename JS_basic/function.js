// 함수를 만드는 방법
// 1. 함수선언
function 함수이름(파라미터) {
  동작
  return 리턴값
}

// 2. 함수 표현식(Function Expression) -> 함수선언을 값처럼 사용하는 방식
// 1)
const printCodeit = function() {
  console.log('Codeit');
}

printCodeit();
// 2)
const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function (){
  console.log('Button is clicked!');
});

// 3. 함수 선언식과 함수 표현식의 차이점
// 1) Hoisting
// 함수선언식은 선언전에도 사용가능했다(Hoisting).
printHello(); // Hello

function printHello() {
  console.log('Hello');
}

// 함수표현식은 선언 이전에 접근할 수 없음.
printHi(); // ReferenceError

const printHi = function () {
  console.log('Hi');
}

// 2) Scope
// 함수 선언식 -> 함수 스코프르 가진다. 함수안에 선언된 함수는 함수 밖에서 선언이 안된다.
function printSayHello () {
  function printJS() {
    console.log('JavaScript')
  }

  console.log('Codeit');
  printJS();
}

printSayHello();
// printJS(); // ReferenceError

// 함수 표현식 -> 함수가 아닌 다른코드블록에서 선언하게되면 전역적으로 호출이 가능.
const x = 4;

if (x < 5) {
  function printJavaScript() {
    console.log('JavaScript');
  }
}

{
  function printSayHi() {
    console.log('Hi');
  }
}

printSayHi();
printJavaScript();
// 함수 표현식은 할당된 변수에 따라 Scope가 결정.
var printI = function () {
  console.log('I');
};

let printLove = function () {
  console.log('Love');
};

const printMoon = function () {
  console.log('Moon');
};