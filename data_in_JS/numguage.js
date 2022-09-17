// 숫자 표기법
// 1. 지수표기법
let millionaire = 100000000;
let myNumber = 1e9;
console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

// 16진법(Hexadecimal) -> 16진법은 x를 쓰고
let hex1 = 0xff; // 255 
let hex2 = 0XFF; // 255

//8진법 (Octal) -> o를 쓰고
let octal = 0o377; // 255

// 2진법 (binary numeral system) -> b를 씀
let binary = 0b11111111; //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// 2. 숫자형 메쏘드
let myNumber1 = 0.3591;

//toFixed(범위는 0 ~ 100)
console.log(myNumber1.toFixed(3)); // 파라미터로 받은 숫자값까지 반올림해서 보여줌.
// 범위를 벗어나는 숫자값은 0으로 표현됨. ex) console.log(myNumber.toFixed(7));의 경우
// 0.3591000 으로 표현
// 그리고 toFixed의 결과 값은 문자형이기때문에 주의해서 사용해야됨.

// 숫자형으로 변환해서 사용하도록한다. Number 또는 연산기호로 숫자형을 만들 수 있다.
console.log(Number(myNumber1.toFixed(3)));
console.log(+myNumber1.toFixed(2));

// toString(2 ~ 36) -> 파라미터로 전달받은 숫자의 진법으로 변환해주는 메쏘드
let myNumber2 =255;

console.log(myNumber2.toString(2)); // 2진법
console.log(myNumber2.toString(8)); // 8진법
console.log(myNumber2.toString(16)); // 16진법
// 숫자에 바로 사용도가능.
// 정수형태 숫자값에 메소드를 사용할때는 .. 점 2개를 사용하거나 ()에 담아서 사용
console.log(255..toString(2));
console.log((255).toString(2));

// 3. 바보 자바스크립트
let sum = 0.1 + 0.2;
console.log(sum);
// 값이 이상하게 나옴. 부정확하게 나오는 숫자의 이유는 사람과 컴퓨터가 숫자를 다루는 방식이 다르기때문
// 컴퓨터는 0과 1로 표현하기 때문. 0.1같은 경우 이진수로 표현하면 무한소수로 표현
// 이 때 자바스크립트, 파이썬, 등 각 프로그램에서 표현할 수 있는 숫자범위 내에서 반올림해버림
// 여기서 발생하는 미세한 차이가 오차로 발생

// 오차해결 방법!
// toFixed, Math.round 등 활용
console.log(Number(sum.toFixed(1))); // 0.3
console.log(+sum.toFixed(1)); // 0.3
console.log(Math.round(sum * 10) / 10); // 0.3