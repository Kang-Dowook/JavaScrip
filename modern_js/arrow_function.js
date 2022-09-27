// ### Arrow Function 이름이 없는 익명 함수

// 변수에 할당하거나
const getTwice = (number) => {
  return number * 2;
};

console.log(getTwice(5));

// 함수의 아규면트로 선언할때 주로 활용
const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', () => {
//   console.log('button is clicked!');
// });

// Arrow Function 줄입표면 쥐의사항
const getTwice1 = number => { // 가독성을 위해 ()호를 생략하지 않는건을 추천하기도 함
  return number * 2; // 함수의 {}중괄호 내부가 return문 하나로 이루어져있다면 return도 생략 가능
};

console.log(getTwice1(3));

const sum = (a, b) => {
  return a + b; // 조건문, 반복문 또는 변수에 값을 할당하는 것과 같이 return문 외의 다른 것이 있다면 생량 불가능.
};

const getCodeit = () => {
  return { name: 'Codeit', }; // 또는 retunr문이 객체일때또 생략 불가능. 중괄호를 함수의 동작부분으로 생각할 수 있다.
                              // const getTwice2 = () => ({ name: 'Codeit', }); 이렇게 객체를 소괄호로 감싸면 동작한다.
};

console.log(sum(10, 5)); 
console.log(getCodeit());

// Arrow Function에는 아규먼트 객체가 없다.
function normalFunc() {
  console.log(arguments);
};

const arrowFunc = () => {
  console.log(arguments);
}

normalFunc(1, 2, 3);
// arrowFunc(1, 2, 3); // ReferenceError