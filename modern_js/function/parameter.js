// parameter
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