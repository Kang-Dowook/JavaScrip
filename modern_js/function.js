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

// Named Function Expression(기명 함수 표현식)
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