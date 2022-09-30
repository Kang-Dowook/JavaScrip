// ### 1. parameter
function greeting (name = '함수의 기본값') { // 여기서 name이 파라미터 함수 외부에서 내부로 전달하고 싶은것
  console.log(`Hi! My name is ${name}`); // 함수 선언부분에서 소괄호()안에 작성되는 것이 파라미터
}

greeting('JavaScript'); // JavaScript, Codeit, World 는 파이미터랑 구분해야되는데 얘들은 아큐먼트(Argument)라고 부른다.
greeting('Codeit'); // 함수를 호출하는 부분에서 파라미터로 전달하는 것을 아규먼트
greeting('World');
greeting();

// 파라미터 기본값의 성질 (순서대로 전달된다)
function hi(name = 'Codeit', interest) {
  console.log(`Hi! My name is ${name}`);
  console.log(`I like ${interest}`);
}

hi('JavaScript'); // interest에 'JavaScript'가 전달될것 처럼 보이지만 기본값은 순서대로 전달되기 때문에
                  // name에 'JavaScript'가 전달되고 interst에 undefined가 호출.
                  // 기본값을 세팅할때 제일 마지막에 세팅하는것을 권장.

function hi1(name = 'Codeit', interest = 'JavaScript') {
  console.log(`Hi! My name is ${name}`);
  console.log(`I like ${interest}`);
}

hi1(undefined, 'Python'); // undefined도 값으로 전달가능. 이를 활용해서 기본값을 사용할 수 도있다.

// 함수에는 2개의 파라미터가 있지만 아규먼트로는 1개만 전달한 상황
function defaultTest(x, y = x + 3) { 
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
};

defaultTest(2); // 아큐먼트를 1개를 줬을때는 함수에서 자동적으로 기본값을 사용
                // 하지만 아규먼트를 2개줬을 때(2, 3)는 y의 파라미터로 3이 전달됨.


// ### 2. arguments
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments); // 유사배열
  console.log('--------------------');
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain'); // undefined, undefined
printArguments('Jayden', 'Scott'); // undefined
printArguments('Suri', 'Jack', 'Joy', 'Noel'); // 3개 이상이라 Noel은 무시됨

// arguments의 갯수만큼만 출력하려면???
function printArguments1(a, b, c) {
  console.log(arguments[0]); // 인덱싱을 통한 요소의 접근 가능
  console.log(arguments[1]);
  console.log(arguments); // 배열의 메소드를 사용할 수 없는 유사배열. 함수내부에서 사용할수 있는 특별한 객체.
  console.log(arguments.length); // length 프로퍼티 사용하여 요소 갯수 확인 가능
  for (const arg of arguments) {
    console.log(arg); // for문을 통한 반복작업 가능
  }
  // arguments객체를 활용하면 호출할때 전달되는 아규먼트에 따라 유연하게 동작하는 함수를 만들 수 있다.
  // 함수 내부에서 자동으로 만들어 지는 arguments라는 객체를 통해 함수를 호출할때 전달한 arguments을 유연하게 다루는 방법들.
  
  // 주의할점!!!
  // arguments라는 객체가 함수내부에 특정한 기능으로 존재하기 때문에 파라미터의 이름을 arguments로 짓거나
  // 함수 내부에서 arguments라는 이름의 변수나 함수를 피해야한다.
  console.log('--------------------');
}
printArguments1('Young', 'Mark', 'Koby');
printArguments1('Captain'); 
printArguments1('Jayden', 'Scott');
printArguments1('Suri', 'Jack', 'Joy', 'Noel');

// ### 3. Rest Parameter

function printArguments2 () {
  for (const arg of arguments) { // argument 객체를 활용하면 불귀친한 아규먼트 요소를 받았을때 정돈되게 사용할 수 있다.
    console.log(arg);
  }
  console.log('------------')
}

printArguments2('Young', 'Mark', 'Koby');
printArguments2('Captain');
printArguments2('Jayden', 'Scott');
printArguments2('Suri', 'Jack', 'Joy', 'Noel');
// 아규먼트의 아쉬운점
// 1) 유사배일이기에 배열 메소드를 사용할 수 없다.
// 2) 항상 함수를 호출 할때 사용한 아규먼트 전체를 다루기 때문에 요소 몇개만 다룰때는 indexing을 사용해 세분화 시켜야한다는점
// 이런 불편함을 줄이기 위해 'Rest Parameter' 문법이 등장.

// Rest Parameter 문법
function restParameters (...args) { // ...args -> rest parameter
  console.log(args.splice(0, 2)); // args는 배열이기 때문에 배열 메소드와 사용이 가능
  for (const arg of args) {
    console.log(arg);
  }
  console.log('------------')
}

restParameters('Young', 'Mark', 'Koby');
restParameters('Captain');
restParameters('Jayden', 'Scott');
restParameters('Suri', 'Jack', 'Joy', 'Noel');

function printRank(first, second, ...others) { // 다른 일반 파라미터와 사용할때는 제일 마지막에 작성되어야 한다.
  console.log('코드잇 레이스 최종 결과');       // 명확하게 사용해야될 파라미터는 일반 파라미터로, 유연하게 변형되는 파라미터는 레스트 파라미터.
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');
// 레스트 파라미터를 우선적으로 사용하고 불가피한경우 아규먼트 사용을 권장.