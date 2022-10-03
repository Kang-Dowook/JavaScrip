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

// ### try catch 활용하기
function printMembers(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
      alert(`${err.name}가 발생했습니다. 콘솔을 확인해 주세요`)
  }
} // try catch 문도 결국 각각의 코드 블록으로 이루어 져있다.

const teamA = ['상혜', '혜진', '지혜', '혜선'];
printMembers(teamA);

const codeit = { name: 'codeit'};
printMembers(codeit); // TypeError

const teamB = ['영훈', '재훈', '종훈', '정훈'];
printMembers(teamB);

// 실행이 가능한 코드에서 사용할 수 있다는것도 알아두자.
try {
  const title = 'Codeit';
} catch (err) {
  console.error(err);
}
console.log(title); // 코드 블록 밖이라 실행되지 않음.
// 실행가능한 코드에서 발생한 에러를 다루는 과정을 '예외 처리(Exception Handling)'이라고 부른다.


// ### finally 문
// try catch는 사실 finally라는 코드 블록을 하나 더 가질 수 있다.
// finally문은 try catch 문이 끝난 다음에 최종적으로 실행될 코드를 다룰 때 활용.

// Finally 문 형태
try {
  // 실핼할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}

// try문에서 ㅇ에러가 발생하지 않는다면 try 문의 코드가 모두 실행된 다음에,
// try 문에서 에러가 발생한면 catch문의 코드가 모두 실행된 다음 실행할 코드를 finally문에 작성하면 된다.

// 다시 말해 try 문에서 어떤 코드를 실행할 때 에러 여부와 상관 없이 하상 실행할 코드를 작성하는것.
function printNames(...names) {
  for (const name of names) {
    console.log(name);
  }
}

try {
  printNames('영훈', '윤수', '동욱');
} catch (err) {
  alert('에러가 발생했습니다!');
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}
// 위 코드 처럼 에러 유무와 관계없이 코드 실행 시각을 알고 싶을 때 활용할 수도 있다.

// ### finally문에서의 에러 처리는?
// 참고로 finally문에서 에러가 발생할 경우에는 다시 그 위에 있는 catch문으로 넘어가진 않는다.
// 만약 finally 문에서도 에러 처리가 필요한 경우에는 아래 처럼 try catch문을 중첩해서 활용하는 방법도 있다.
try {
  try {
    // 실핼할 코드
  } catch (err) {
    // 에러가 발생했을 때 실행할 코드
  } finally {
    // 할상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행할 코드
}