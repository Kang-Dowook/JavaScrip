// ### 1. Spread 구문( Spread Syntax )
const numbers = [1, 2, 3];

console.log(...numbers); // 아래코드와 같다.
console.log(1, 2, 3);
// 여러개를 하나로 묶음 배열을 다시 각각의 개별값으로 펼치는 문법
// 문법은 배열 앞에 맞침표 ...3개를 붙여주면된다.

// rest parameter와 문법이 비슷한데 동작하는 방식은 전혀 다르다.
// rest parameter는 여러개의 아규먼트를 하나의 파라미터로 묶는 방식이고
// spread는 하나의 값을 각가의 개별값으로 펼치는 방식. rest parameter와 차이 구분.
const sumAll = (...args) => {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4));

// 1) spread문법을 사용하면 배열의 값을 편리하게 복사할 수 있다!!!
const webPublishing = ['HTML', 'CSS'];
// const interactiveWeb = webPublishing; // 객체타입의 값들은 변수에 주소값이 참조되는점 인지.
                                      // 그래서 복사하기 위해서는 slice메소드를 이용했음.
                                      // 하지만 spread 구문읠 사용하면 훨씬 더 간단하게 복사하고 추가할 수 있음.

const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

// 2) 여러배열을 합칠때도 스프레드 구문을 사용하여 직관적으로 활용할 수 있다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1] + [...arr2];
console.log(arr3);

// 3) 함수를 호출할 때 아규먼트로 활용할 수 있다.
const introduce = (name, birth, job) => {
  console.log('안녕하세요! 반갑습니다');
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년 생이고,`);
  console.log(`직업은 ${job}입니다.`);
  console.log('잘 부탁드립니다 :)');
};

const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr); // 배열을 펼쳐서 아규먼트로 이용할 수 있다는점도 기억.
                     // 주의할 점은 스프레드 구문 자체를 값으로 오해하면 안된다.
                     // 여러 값의 목록일뿐.

// ### 2. Spread문법을 사용하여 객체로 만들면?
const members = ['태호', '종훈', '우재'];

const newObject = {...members};

console.log(newObject); // 배열의 인덱스가 프로퍼티 네임이 되어 객체가 만들어짐.

// ### 3. 객체 Spread 하기
const codeit = { 
  name: 'codeit', 
};

const codeitClone = { 
  ...codeit, // spread 문법!
};

console.log(codeit); // {name: "codeit"}
console.log(codeitClone); // {name: "codeit"}
// 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수가 있게 된다.

const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
// 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용할수 있다.

// ### 4. 주의사항.
// spread 구문을 사용해서 새로운 배열을 만든다거나 함수의 아규먼트로 사용할 수는 없다.
const latte1 = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha1 = {
  ...latte1,
  chocolate: '20ml',
}

// [...latte1]; // Error. 새로운 배열을 만들 수 없음.

(function (...args) {
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha1); // Error. 아큐먼트로 사용할 수 없음.

// 그렇기 때문에 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 화룡ㅇ해야 한다는 점. 기억하기.