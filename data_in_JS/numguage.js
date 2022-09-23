// 1. 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법 e9 = 10^9을 의미힘.

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log('지수표기법')
console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);
console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

// 16진법 (Hexadecimal) -> x
let hex1 = 0xff; // 255
let hex2 = 0XFF; // 255

// 8진법 (Octal) -> o
let octal = 0o377; // 255

// 2진법 (binary numeral system) -> b
let binary = 0b11111111 // 255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// 2. 숫자형 메소드
let myNumber1 = 0.3591;

// 가장많이 사용하는 메쏘드 2개

// 1) toFixed(0 ~ 100) -> 소수를 다룰때 사용하는 메쏘드. 소숫점자릿를 정해주는 메쏘드. 정해진 자릿수를 넘을경우 직후의 숫자에 반올림함
// 주의해야 할것은 결과값이 문자열이라는것! 연산을 하고 싶다면 숫자형으로 변환해서 사용
// tip 자바스크립트에서는 숫자형으로 변활할때 Number를 쓰지만, +와 같이 연산자를 통해 숫자형으로 만들수 있다.
console.log(myNumber1.toFixed(3));

// 2) toString(2 ~ 36)
// 파라미터로 전달되는 값의 진법으로 숫자를 변환해주는 메쏘드
// 주의! 결과값이 문자열이라는것 기억하기.
let myNumber2 = 255;

console.log(255..toString(2));
console.log((255).toString(2));
console.log(myNumber2.toString(2));
console.log(myNumber2.toString(8));
console.log(myNumber2.toString(16));

// 변수에 담아 점표기법으로 사용하고 있지만, 숫자에 바로 적용도가능
// 하지만, 이때 점표기법을 사용하면 255.toString(2) 소숫점으로 인식하기때문에 오류남
// 숫자와 사용할때는 .. 이렇게 점을 2개 찍어줘야됨.
// 아니면 ()로 묶은 다음 점표기법을 사용.