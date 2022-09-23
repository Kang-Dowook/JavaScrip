// JS는 다른 언어에 비해 데이터 타입이 유연하다.
// 상황에따라 데이터 타입이 변할 수 있다!
// 파이썬의 경우 서로다른 타입끼리 연산이 불가능
// c나 java의 경우 변수에도 데이터 타입을 지정, 타입이 정해진 변수에 다른 타입은 할당 불가!
// 하지만 JS에서는 간혹 다른 타입끼리 연산이 가능한 경우와 변수에 값이 재할당 가능하다.

// JS를 잘 다루기 위해 데이터 타입을 잘 다워야한다.
// 기본형(Primitive Type) : Number, String, Boolean, Null, Undefined
// ES2015에 추가된 기본형 : Symbol -> 유일한 값을 만들 때!
// ES2015에 추가된 기본형 : BigInt -> 엄청 큰 숫자를 다룰 때!
// 참조형(Reference Type) : Object

// ### 1. Symbol
// 심볼(symbol)은 기본형 데이터 타입(primitive data type)중 하나.
// 심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용

const user = Symbol('this is a user');
// 일단, 이렇게 Symblo이라는 함수를 통해서 심볼 값을 만들어 낼 수 있다.
// 그리고 괄호 안에 심볼에 대한 설명을 붙일 수 도있다.
// 이렇게 symbol값을 담게 된 user라는 이름의 변수는 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수가 된다.

console.log(user === 'this is user'); // false
console.log(user === 'user'); // false
console.log(user === 'Symbol'); // false
console.log(user === 'true'); // false
console.log(user === 'false'); // false
console.log(user === 123); // false
console.log(user === 0); // false
console.log(user === null); // false
console.log(user === undefined); // false

// 심지어 똑같은 설명이 붙은 심볼을 만들더라도 두 값을 비교하면 false가 반환된다.
const symbol1 = Symbol('this is Symbol');

console.log(symbol1 === Symbol); // false

// ### 2. BigInst
// BigInt는 자바스크립트에서 아주 큰 정수(integer)를 표현하기 위해 등장한 데이터 타입
// 사실 자바스크립트의 숫자에는 안전한 정수 표현의 한꼐가 있다.
// 자바스크립트에서 안전한 최대 정수는 2**53 - 1, 안전한 최소 정수는 -(2**53 - 1)이다.
// 2**53 - 1은 구체적으로 9007199254740991이라는 숫자로 약 9,000조 정도의 숫자인데
// 안전한 정수 표현의 의미는 자바스크립트에서 이 숫자 범위를 초과하는 정숫값을 사용하면 미세한 오류가 발생한다는 뜻
console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
console.log(9007199254740991 + 2); /// 9007199254740992
console.log(9007199254740993); /// 9007199254740992

// 이 숫자 범위는 JavaScript가 IEEE754에 기술된 '배정밀도 부동소수점 형식 숫자체계'를 사용하기 때문.
// 즉, 자바스크립트의 숫자형(number type)값에는 9,000조 정도의 정수 표현의 한계가 존재한다.
// 암호 관련 작업이나 계산기 관련 작업을 할 때, 아주 큰 숫자를 다루거나
// 혹은 굉장히 정확한 연산이 필요한 상황에서 이보다 더 큰 숫자가 필요할 수 있다.

// 그럴 때 BigInt라는 데이터 타입의 값을 사용.
// BigInt 타입의 값은 일반 정수 마지막에 알파뱃 n을 붙이거나 BigInt라는 함수를 사용하면됨.
console.log(9007199254740993n); // 9007199254740993n
console.log(BigInt(9007199254740993)); // 9007199254740993

// 이렇게 BigInt 타입을 사용하면 2**53 - 1 보다 큰 정숫값도 안전하게 표현 가능.
// 몇가지 주의사항
// BigInt 타입은 말 그대로 큰 정수를 표현하기 위한 데이터 타입. 소수 표현에는 사용할 수 없다.
// 1.5n; SyntaxError

// 소수 형태의 결과가 리턴되는 연산은 소수점 아랫부분은 버려지고 정수 형태로 리턴.
console.log(10n / 6n); // 1n
console.log(5n / 2n); // 2n

// 그리고 BigInt 타입끼리만 연산할 수 있고, 서로 다른 타입끼리의 연산은 명시적으로 타입 변환을 해야한다.
console.log(3n * 2); // TypeError
console.log(3n * 2n); // 6n
console.log(Number(3n) * 2); // 6

// 큰 범위의 정수를 안전하게 사용할 수 있다는 장점이 있지만,
// 이런 제한 사항들 때문에 실제로 BigInt 타입의 값을 활용할 상황들이 그리 흔하진 않다.

// ### 3. typeof 연산자
// typeof 연산자를 통해 사용하는 값이 어떤 데이터 타입을 가지고 있는지 확인했다.
// typeof 연산자는 키워드 다음 공백(띄어쓰기)을 두고 값을 작성해도 되고,
// 함수를 사용하듯 괄호로 감싸서 사용할 수 도있었다.

console.log(typeof 'codeit'); // string
console.log(typeof user); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof true); // boolean
console.log(typeof(false)); // boolean
console.log(typeof(123)); // number
console.log(typeof(NaN)); // number
console.log(typeof(456n)); // bigint
console.log(typeof(undefined)); // undefined
// 하지만 한 가지 주의해야 할 점은 typeof 연산자의 결과가 모든 타입과 1:1로 매팅되지 않는다는점.

// ### 1) null이 object ???
// 일단, typeof null을 하면 문자열 null이 리턴되는게 아니라 문자열 obeject가 리턴.
console.log(typeof null); // object

// 이건 자바스크립트가 처음 구현될 때의 특별한 문법 설계 때문. 나중에 ECMAScript에서 수정이 제안되었었지만,
// 이미 개발된 많은 프로젝트에 버그가 생기는 우려로 인해 반영되지 않고있음.

// ### 2) function?
// 그리고 함수에 typeof 연산자를 사용하면 function이라는 값을 리턴하는데
function sayHi() {
  console.log('Hi!?');
}

console.log(typeof sayHi); // function
// 자바스크립트에서 함수는 객체로 취급. 그래서 간혼 object를 리턴할거라 예상하는 실수를 한다.
// typeof 연산자를 함수에 사용하면 function이 리턴.


// ### 4. 불린인 듯 불린 아닌 불린같은 값
if (thisYear > 2015) { // 조건
  console.log('I love JavaScript! :)');
} else {
  console.log('I haver JavaScript! :(');
}

if ('Codeit') { // 괄호() 안에 조건이 아닌 '문자열'
  console.log('I love JavaScript! :)');
} else {
  console.log('I haver JavaScript! :(');
}

// 불린이 아닌 타입이 불린으로 형변환 되는 것
// False로 평가되는 값 : false, null, undefined, NaN, 0, '' -> Falsy값
// True로 병가되는 값 : 나머지 값들! -> Truthy 값. 빈배열[], 빈객체{} 값도 Truthy값임!
