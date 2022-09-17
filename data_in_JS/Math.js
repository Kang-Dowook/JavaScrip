// Math 내장 객체

console.log('1. 절댓값')
// 1. 절댓값(Absolute Number)
// Math.abs(x)를 하면 x의 절댓값이 리턴.
console.log(Math.abs(-10));
console.log(Math.abs(10));

console.log('2. 최댓값')
// 2. 최댓값(Maximum)
// Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴
console.log(Math.max(2, -1, 4, 5, 0));

console.log('3. 최솟값')
// 3. 최솟값(Minimum)
// Math.min 함수에 파라미터로 여러 수를 넘겨주면 그중 가장 작은 값이 리턴됨.
console.log(Math.min(2, -1, 4, 5, 0));

console.log('4. 거듭제곱')
// 4. 거듭제곱( Exponentiation )
// 자바스크립트에서 Math.pow( x, y )를 하면 x의 y승의 결과값이 리턴됨
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

console.log('5. 제곱근')
// 5. 제곱근( Square Root )
// Math.sqrt(x)를 하면 x의 제곱근이 리턴됨
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));

console.log('6. 반올림')
// 6. 반올림( Round )
// Math.round(x)를 하면 x의 반올림된 값이 리턴된다.
// 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장가까운 정숫값으로 내려간다.
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));

console.log('7. 버림과 올림')
// 7. 버림과 올림( Floor and ceil )
// Math.floor(x)를 하면 x의 버림 값이, Math.ceil(x)를 하면 x의 올림값이 리턴됩니다.
// 이 경우, 소수 부분의 자릿수나 값에 상관없이 정수로 만들어버림.
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));

console.log('8. 난수')
// 8.난수( Random )
// Math.random을 하면 0이상 1미안의 값이 랜덤으로 리턴됨.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());