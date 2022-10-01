// 에러와 에러 객체.

// 자바스크립트 코드에서 에러가 발생했을때 가장 큰 문제는 프로그램 자체가 멈춘다는것.
// 자바스크립트에서 안정적인 코드를 만들기 위해서 에러를 다루는 방법을 익혀두는 것이 중요하다.
// 에러 메세지도 하나의 객체이다. 에러의 이름과 에러 내용으로 나눠져 있다.
// name, message로 구성.
// 에러의 종류는 대표적으로 ReferenceError, TypeError, SyntaxError 3가지가 있는데,
// SyntaxError는 발생했을때 코드가 실행가기도 전에 에러를 발생시킴.

console.log('시작!');

// 의도적으로 에러 객체 만들기
const error = new TypeError('타입 에러가 발생했습니다.') // 주의!!! 에러 객체를 만든것이지 에러를 발생시킨것은 아님

// 자바스크립트에서 의도적으로 에러를 발생시키는 방법 throw키워드 사용
throw error;

console.log(error.name); // TypeError
console.log(error.message); // '타입 에러가 발생했습니다.'

console.log('끝!');

// try catch문
try {
  // 동작시킬 코드 -> 코드 작성중 에러가 발생하면 작성할 코드를 catch 블록 안에서 작성하면됨
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}

try {
  console.log('에러 전');

  const codeit = '코드잇';
  console.log(codeit);
  
  codeit = 'codeit'; // const에 재할당하려 했기에 TypeError오류 발생
                     // 에러가 발생한 이후 시점 코드는 실행되지 않는다.

  const language = 'JavaScript';
  console.log(language);
} catch(e) { // error 파라미터에 에러 객체가 전달되어 catch 블록이 실행. error 파라미터 네이임은 마음대로 정할 수 있다.
             // error를 err 또는 e로 표현하기도 한다.
console.log('에러 후'); // 에러가 없으면 catch 블록은 실행되지 않는다.
console.error(e);
console.log(e.name);
console.log(e.message);
};