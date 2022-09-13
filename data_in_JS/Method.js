// 메소드 (Method)
// 연관된 여러값을 하나로 묶어고 싶을때 객체를 활용한것 처럼
// 연관된 여러 함수를 하나로 묶을 때도 객체를 사용
// 객체는 어떤 값도 넣을 수 있기 때문에 객체 값에 함수를 넣는 것이다.

let greetings = {
  sayHello : function(name) {
    console.log(`Hello! ${name}`);
  },
  sayHi : function() {
    console.log('Hi!');
  },
  sayBye : function () {
    console.log('Bye!'); // console.log도 console이라는 객체에 log라는 메소드!
  }
};

greetings.sayHello('Codeit'); // console.log와 형태가 유사!
greetings['sayHello']('Codeit'); // 대괄호로 property에 접근하고 소괄호로 메소드 호출
// 메소드는 객체의 고유한 동작으로 함수에 의미를 부여할 수 있기 때문에 사용!

let rectAngle = {
  width : 30,
  height : 50,
  getArea : function () {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width : 15,
  height : 40,
  getArea : function () {
    return triAngle.width * triAngle / 2;
  }
}
// 모두 값은 propertyName을 가지고 있지만 사각형과 삼각형의 넓이를 구하는 방식은 다르다.
// 똑같은 넓이를 구하는 getArea 함수지만 어떠한 객체의 Method냐에 따라서
// 객체에 맞는 동작을 할 때 Method를 사용한다.
// Method를 활용하면 다른 함수와의 이름 중복을 피할 수 있고,
// 객체에 집중해 함수의 동작부분을 작성할 수 있다.
// 사용시 객체의 고유한 동작으로 구분할 수 있기 때문에 의미있는 코드로 만들 수있다.