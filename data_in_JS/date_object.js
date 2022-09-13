// 내장 객체(Standard built-in objects)
// 자바스크립트가 미리 가지고있는 객체 = 내장 객체
// 자바스크립트는 모든 것이 객체다!

// Date 객체
let myDate = new Date();

console.log(myDate)
// 결과값 
// Thu Sep 08 2022 21:32:33 GMT+0900 (한국 표준시)
// (요일 월 일 년도   시간       시간대(컴퓨터 사용한곳)   순서로 나옴)

// new Date(milliseconds)
console.log(new Date(1000));
// 결과값 1970년 1월 1일 00:00:00 UTC + 1초(1000밀리세컨드는 1초를 1000으로 나눈값)
//                                     1초 부분이 파라미터 1000의 값.

//new Date('YYYY-MM-DD')
console.log(new Date('2017-05-18'));
//new Date('YYYY-MM-DDThh:mm:ss')
console.log(new Date('2017-05-18T19:11:15'));

// 소괄호 안에 여러값넣는 방법
// new Date(YYYY, MM, DD, hh, mm, ss,ms) 연도(YYYY)와 월(MM)은 필수 나머지 부분 생략시 1일 0시 0분 0초로 나옴
// 주의할 점은 월(MM)은 0부터 인식 즉 MM값에 3을 넣으면 4월인 Apil이 출력

console.log('----------Date.getTime-----------')
// Date.getTime()
let fixDate = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = fixDate.getTime() - today.getTime(); // 과거 - 오늘 날짜
console.log(timeDiff + '밀리초'); // 과거부터 지금까지 몇 밀리초 차이나는지
console.log(timeDiff / 1000 + '초'); // 과거부터 지금까지 몇 초 차이나는지
console.log(timeDiff / 1000 / 60 + '분'); // 과거부터 지금까지 몇 분 차이나는지
console.log(timeDiff / 1000 / 60 / 60 + '시간'); // 몇시간 차이나는지

console.log('----------Date객체와 쓰이는 다양한 메소드-----------')
// Date객체와 쓰이는 다양한 메소드
let dateMethod = new Date(2017, 4, 18, 19, 11, 16);

console.log(dateMethod.getFullYear()); // 2017
console.log(dateMethod.getMonth()); // 4
console.log(dateMethod.getDate()); // 18 (일자)
console.log(dateMethod.getDay()); // 4(요일 일요일부터 0~6으로 계산) 즉 4 = 목요일
console.log(today.getDay()); // 공교롭게도 오늘(2022.09.08 목요일) 목요일임...ㄷㄷ
console.log(dateMethod.getHours()); // 19
console.log(dateMethod.getMinutes()); // 11
console.log(dateMethod.getSeconds()); // 16
console.log(dateMethod.getMilliseconds()); // 0 (생략되어서 0)
// 더 있지만 요종도만
// 활용해서 D-day만들 수 있음... 실습과제 Dday 나올것 같은 예감이..

console.log('----------Date 객체 정보수정-----------')
// Date 객체 정보 수정하기
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) -> 1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정

let myDate1 = new Date(2022, 8, 8, 22, 9, 44);

myDate1.setFullYear(2002);
myDate1.setMonth(7);
myDate1.setDate(11);
console.log(myDate1);

console.log('----------간단하게 시간 정보 확인하기-----------')
// 간단하게 시잔 정보 확인하기
// 간단하게 시잔 정보를 표현하고 싶다면 아래와 같은 메소드를 활용해 볼 수도 있다.
let myDate2 = new Date();

console.log(myDate2.toLocaleDateString()); // myDate2가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate2.toLocaleTimeString()); // myDate2가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate2.toLocaleString()); // myDate2가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)
// toLocaleDateString(), toLocaleTimeString(), toLocaleString() 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여준다.

console.log('----------똑똑한 Date?!-----------')
// Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있다.
// 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해준다.

let myDate3 = new Date(2022, 0, 35); // 2022년 1월 32일은 없는 날짜

console.log(myDate3) // 자동으로 2월로 넘어가줌.

console.log('----------지금 이 순간...?!-----------')
// 지금 이 순간...?!
// Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환
// 이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어 낼 수 있다!!!
let myDate4 = new Date();

console.log(Date.now() === myDate4.getTime()); // true
// getTime메소드를 호출한 값과 일치한다는 사실을 알 수 있다.
// 특정 시점이 아니라 단순히 순간순간 그 때 당시 시간 값이 필요한 경우 Date.now() 메소드를 활용하는것이
// 코드의 가독성 뿐만 아니라 성능적인 측면에서도 더 유리하다.

console.log('----------Date객체의 형변환-----------')
// Date객체의 형변환

let myDate5 = new Date(2022, 8, 24);
console.log(typeof myDate5); // object
console.log(String(myDate5));
console.log(Number(myDate5));
console.log(Boolean(myDate5)); // true
// Date 객체의 자료형을 확인해보니 'object', 즉 객체라는 것을 확인
// Date 객체를 boolean 타입으로 변환하면 true
// string 타입으로 변환하면 날짜 값이 그대로 문자열로 변환
// number 타입으로 변환할 경우 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값.
console.log(myDate5.getTime() === Number(myDate5)); // true
// 이것은 즉, Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻!

console.log('----------Date객체끼리 사칙연산-----------')
let myDate6 = new Date(2023, 1, 10);

let d_Day = myDate6 - today;
console.log(d_Day); // ms단위
console.log(d_Day / 1000); // sec단위
console.log(d_Day / 1000 / 60); // min 단위
console.log(d_Day / 1000 / 60 / 60); // hour 단위
console.log(d_Day / 1000 / 60 / 60 / 24); // day 단위 항해 끝날때 까지 154일 남음. 항해 시작까지는 55일 남앗고... 리액트 언제하냐 ㅅㅂ

console.log('----------날짜를 표현하는 문자열-----------')
// 날짜를 표현하는 문자열
// YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이있다.
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
// 이 방법은 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 서로 다른 결과값이 나올 수 있다
// 그래서 IETF호환RFC 2822 타임스탬프와 ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는것을 권장.