// String 심화

// 1. 문자열을 다루는 여러가지 방법 ( 배열과 비슷한 부분이 많다. )

let myString = 'Hi Codeit';
let myString2 = '        Hi Codeit       ';

// 부분 문자열 접근 slice(start, end) 끝 인덱스 바로 직전까지 가져온다. (배열은 splice임 햇깔리면안됨)
console.log(myString.slice(0, 2)); // 0 ~ 1번 index까지 리턴해줌.
console.log(myString.slice(3)); // 시작지점 3부터 끝까지 가져옴.
console.log(myString.slice()); // 문자열 전체를 가져온다.

// 양 끝 공백 제거
console.log(myString2.trim()); // trim 메쏘드


// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
console.log(myString.indexOf('a')); // 앞 부터. 없는 값은 -1
console.log(myString.lastIndexOf('i')) // 뒤 부터

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메쏘드

// 문자열 길이 
console.log(myString.lenght); // length 프로퍼티
