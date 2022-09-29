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

// 4. Named Function Expression(기명 함수 표현식)
// 함수 표현식으로 함수를 만들 때는 선언하는 함수에 이름을 붙여줄 수도 있는데
// 이름이 있는 함수 표현식, 즉 기명 함수 표현식이라고 부른다.
// 함수 표현식으로 함수가 할달된 변수에는 자동으로 name이라는 프로퍼티를 가지게되는데

const sayHi = function () { // 이름이 없는 함수
  console.log('Hi');
};

console.log(sayHi.name); // sayHi
// 이렇게 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수이름 그 자체를 문자열로 가지게 된다.
// 하지만 함수에 이름을 붙여주게 되면, name 속성은 함수 이름을 문자열로 갖게된다.

const sayHello = function printHelloInConsole() { // 이름이 있는 함수
  console.log('Hello');
};

console.log(sayHello.name); // printHelloInConsole
printHelloInConsole(); // ReferenceError
// 이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고
// 함수를 외부에서 함수를 호출할 때 사용할 수 는 없다.

// 기명 함수 표현식은 일반적으로 함수 내부에서 함수 자체를 가리킬 때 사용되는데
let countdown = function(n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

// countdown(5); -> 잘 작동함

// 위 코드를 살펴보면 아규먼트로 숫자 값을 전달하고 전달 받은 그 값이 0이 될 때까지 
// 하나씩 값을 줄이면서 자기 자신을 호출하는 countdown이라는 함수를 함수 표현식으로 작석
// 이런 식으로 자기 자신을 부르는 함수를 재귀 함수(Recursive function)라 부른다.
// 그런데 만약 이 함수를 복사하려고 다른 변수에 똑같이 담았다가, 
// countdown변수에 담신 값이 변하게 되면 문제가 발생
let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError
// 마지막 줄에서 myFunction 함수를 호출했을 때, 함수가 실행되긴 하지만,
// 6번줄 동작을 수행할 때 호출하려는 countdown 함수가 이미 null값으로 변경되었기 때문에
// 함수가 아니라는 TypeError가 발생한것.
// 이런 상황을 방지하기 위해서 함수 내부에서 함수 자실을 사용하려고 하면
// 함수표현식에서는 반드시 기명함수 표현식을 사용하는것이 좋다.

// function의 이름을 주고 else 안의 countdown을 함수 이름으로 바꿔주면 정상동작
// ex) function printCountdown(n), countdown(n - 1); -> printCountdown(n - 1)

// 함수 표현식을 작성할 때, 함수에 이름을 지정할 수 있다는 점과 특히 이렇게 함수 내에서
// 함수를 가리켜야 할 때는 꼭 함수 이름을 작성해주는 것이 안전하다는 점. 기억해두기.

// 5. 즉시 실행 함수(IIFE)
// 함수를 선언하는 것은 함수를 실행하는 것과 다르다.
function hi() {
  console.log('Hi!');
}
  
hi();
// 일반적으로 이렇게 함수를 먼저 선언한 다음, 선언된 함수 이름 뒤에 소괄호를 붙여서 함수를 실행
// 그런데 때로는 함수가 선언된 순간에 바로 실행을 할 수도 있다.

// 1) 즉시 실행 함수 방법
(function () {
  console.log('Hi!');
})();
// 보시는 것처럼 함수선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식.
// 이렇게 하면 함수가 선언된 순간 바로 실행이 되는 겁니다.
// 함수 선언과 동시에 즉시 실행되는 함수를 즉시 실행 함수 표현(Immediately Invoked Function Expression, IIFE)이라고 부름

(function (x, y) {
  console.log(x + y);
})(3, 5);
// 그리고 즉시 실행 함수도 일반 함수처럼 파라미터를 작성하고, 함수를 호출할 때 아규먼트를 전달할 수도 있다.
// 한 가지 주의할 점은 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용할 수 없다.
(function sayHi() {
  console.log('Hi!');
})();

sayHi(); // ReferenceError

// 그래서 일반적으로 이름이 없는 익명 함수를 사용.
// 다만 함수 내부에서 자기 자신을 호출하는 재귀적인 구조를 만들고자 할 땐 이름이 필요할 수도 있으니까 아래 코드 참고

(function countdown(n){
  console.log(n);
  if (n===0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
})(5);

// 2) 즉시 실행 함수의 활용
// 즉시 실행 함수는 말 그대로 선언과 동시에 실행이 이뤄지기 때문에 일반적으로 프로그램 초기화 기능에 많이 활용
(function init(){
  // 프로그램이 실핼 될때 기본적으로 동작하는 코드들 ....
})();

//혹은 재사용이 필요 없는, 일회성 동작을 구성할 때 활용하기도 한다.
const firstName = Young;
const lastName = kang;

const greetingMessage = (function() {
  const fullName = `${firstName} ${lastName}`;

  return `Hi! My name is ${fullName}`;
})();
// 이렇게 함수의 리턴값을 바로 변수에 할당하고 싶을 때 활용할 수 있다.

// 그리고, 즉시 실행 사후에서 사용하는 변수들은 함수 내에서만 우효하기 때문에 이런점을
// 활용하면, 일시적으로 사용할 변수의 이름들을 조금 자유롭게 작성할 수도 있다는점. 기억.

// ### 6. 값으로서 함수
const printJS = function() {
  console.log('JavaScript');
};

console.log(typeof printJS);
console.dir(0);
console.dir('codeit');
console.dir(true);
console.dir(null);
console.dir(undefined);
console.dir({});
console.dir([]);
console.dir(printJS); // 객체와 비슷한 형태의 값을 가짐. 실제 여러개의 프로퍼티를 가지는 객체타입형태.
// 자바스크립트 함수는 어디서나 할당될 수 있고 다양한 형태로 호출될 수 있다.

// 1) 객체안의 프로퍼티로 사용가능
const myObject = {
  brand: 'Codeit',
  bornYear: 2017,
  isVeryNice: true,
  sayHi: function(name) {
    console.log(`Hi! ${name}`);
  }
};
myObject.sayHi('JavaScript');


// 2) 배열에 담아 호출
const myArray = [
  'codeit',
  2017,
  true,
  function(name) {
    console.log(`Hi! ${name}`);
  },
];
myArray[3]('Codeit');

// 3) 값으로 평가되는 함수는 다른함수의 파라미터로 전달가능.
// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function(){    // DOM 이벤트를 다룰때 파라미터를 전달하는 부분에서 함수를 선언하는 방법 
//   console.log('button is clicked!');
// });

// 4) 함수내에서 조건식에 의해 함수를 호출하거나 생략할 수 있다.
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
};

function getSuccess() {
  return '정답!';
};

function getFail() {
  return '오답!';
};

const question = '5 + 3 = ?';

makeQuiz(question, '8', getSuccess, getFail); // 다른함수에 파라비터로 전달되는 함수를 콜백함수(Callback Function)
// 여기선 getSuccess, getFail 이 두함수가 콜백함수

// 5) 함수의 리턴값이 함수가 될수 있다. -> 함수가 함수를 호출하는 함수를 고차함수(High Order Function)
function getPrintHi() {
  return function () {
    console.log('Hi!?');
  };
};
const sayHi1 = getPrintHi ();
sayHi1();

getPrintHi()(); // 이렇게 호출하기도함