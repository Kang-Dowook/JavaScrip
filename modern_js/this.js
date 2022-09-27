// This 함수 내부에서 주로 사용되며 객체의 매소드를 만들때 중요한 역할
console.log(this);

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function() {
    return `${user.firstName} ${user.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang 출력

function getFullName () {
  // return `${user1.firstName} ${user1.lastName}`; 이런경우 Tess Jang이 두번 출력됨. 이럴때 유용한것이 this 키워드가 유용
  return `${this.firstName} ${this.lastName}`; // this는 함수를 호출한 객체를 가르키는 키워드.
                                               // 코드를 작성할 때 값이 미리 결정되는 것이 아니라
                                               // 함수가 호출될 때 어떤 객체가 그 함수를 호출했는지에 따라 상대적으로 값이 변한다는 것이 특징.
}

const user1 = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: getFullName,
};

const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName: getFullName
};

console.log(user1.getFullName()); // Tess Jang
console.log(admin.getFullName()); // Tess Jang -> user1을 this로 수정하면 Alex kim을 출력

// this 알아보기
// 그냥 this를 사용하거나, 함수를 선언하고 선언한 함수를 그냥 호출하게되면 window객체를 가르킴.
console.log(this); // window 객체

function printThis () {
  console.log(this);
}
printThis(); // window 객체

// 어떤 객체의 메소드로 호출되는 경우
const myObj = {
  content: 'myObj',
  printThis: printThis,
};

const otherObj = {
  content: 'otherObj',
  printThis: printThis,
};

myObj.printThis(); // {content: 'myObj' ...}
otherObj.printThis(); // {content: 'otherObj' ...}
// 함수를 호출한 객체가 this에 담기기 때문에 똑같은 함수를 호출 했지만 다른 객체가 담긴다.

// 일반함수와 arrow함수에서의 this 키워드의 차이

// 위의 함수 printThis를 에로우 함수로 변형하고
// const printThis = () => {
//   console.log(this);
// };

// 코드를 실행하면 모든 결과 값이 window 객체.
// arrow함수에서 this값은 일반 함수에서 호출한 값처럼 상대적으로 변하는것이 아니라
// arrow함수가 선언되기 직전의 this값과 똑같은 값을 가지고 동작.

// 외부에서 여러 객체에 공통적으로 사용되는 메소드를 만들때 뿐만 아니라
// 객체 내부에서 메소드를 만들때도 속해있는 객체에 프로퍼티가 필요한 상황에서 충분히 활용가능.
const naming = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(naming.getFullName());