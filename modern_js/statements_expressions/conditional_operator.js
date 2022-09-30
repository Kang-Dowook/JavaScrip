// 조건 연산자(Conditional operator)
// 표현식으로도 조건문을 다룰 수 있다.

// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식
// 삼항 연산자 (Ternary operator)

 const CUT_OFF = 80;

 function passChecker(score) {
  return score > CUT_OFF ? '합격!' : '불합격';
 }

 console.log(passChecker(90));
// if문보다 훨씬 간결하게 작성할 수 있다.
// 하지만 삼항연산자는 표현식이기 때문에 조건에 따라 변수를 선언한다거나, 조건에따라 반복문은 실행할 수 없다.
// 삼항 연산자가 모든 조건문을 대신할 수는 없다...
