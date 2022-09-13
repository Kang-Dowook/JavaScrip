// 1. 배열(Array)

let coursRanking = {
  '1st': '자바스크립트 프로그래밍 기초',
  '2nd': 'Git으로 배우는 버전 관리',
  '3rd': '컴퓨터 개론',
  '4th': '파이썬 프로그래밍 기초'
};
// 위 객체에서 순서만 중요할뿐 propertyName은 불필요하다.
// 이때는 객체보다 배열이 효율적이다.

let coursRanking1 = [ // 배열은 []대괄호로 만들고 안에 값을은 요소(element)라고 부른다.
  '자바스크립트 프로그래밍 기초', // 요소(element)
  'Git으로 배우는 버전 관리', // 요소(element)
  '컴퓨터 개론', // 요소(element)
  '파이썬 프로그래밍 기초' // 요소(element)
];
// 배열의 특지은 배열안의 값들인 요소에 숫자 값이 매겨진다는것.
// 이 숫자값을 index라고 하고 propertyName과 같은 기능이다.

// 2. 요소에 접근법 (indexing, index는 숫자값 0부터 시작)
console.log(배열이름[index]); // index를 통해서 요소에 접극하는 방법을 indexing이라고 한다.
console.log(coursRanking[0]);
console.log(coursRanking[2 + 1]);

// 순서가 있는 값을 만들때는 객체보다 배열이 간결하고 효율적이다.
// 배열 사용 예(순서가 있는값)

// 서울 공항철도 노선
let airportLines = [
  '인천공항 2터미널', '인천공항 1터미널', '검암', '계양', '김포공항', '마곡나루',
  '디지털미디어시티', '홍대입구', '공덕', '서울역'
];

// 해리포터 시리즈
let harryPotterSeries = [
  '마법사의 돌', '비밀의 방', '아즈카반의 죄수', '불의 잔', '불사조 기사단', '혼혈왕자',
  '죽음의 성물'
];

// 십이지
let chineseZodiac = [
  '자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'
];

// 십간지
let tenHeavenlyStems = [
  '감', '을', '병', '정', '무', '기', '경', '신', '임', '계'
];

// 단순한 여러값의 묶음
// 과일 묶음
let fruits = [
  '사과', '청포도', '딸기', '수박', '체리'
];

// 세트 메뉴 묶음
let menus = [
  '짜장면', '짬뽁', '탕수육'
];


// 3. 배열을 다루는 방법
let members = [
  '쿤칼레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'
];
console.log(typeof members); // object

// 배열도 다양한 내장함수 즉, method가 존재한다.
// 배열 메쏘드 length 배열이 가지고있는 총갯수

console.log(members.length); // 점표기법
console.log(members['length']); // 대괄호 표기법
console.log(members[members.length - 1]); // 배열의 마지막 요소
console.log(members[5]); // 없는 값에 접근하면 에러가 아니라 'undefined'가 출력

members[5] = 'NiceCodeit'; // 존재하지 않는 인덱스에 접근해 값을 추가 또는 변경 가능하다.
console.log(members[5]);

// 인덱스 순서를 넘어 값을 만들게 되면 중간에 생략된 값은 'undefined'값이 생성
members[7] = "i'm good";
console.log(members[6]);
console.log(members) // members의 length는 8로 증가하고 6번 인덱스 값은 'empty'로 비어있다고 표시


// 4. 요소 삭제하기
// 객체에서 값 삭제하는 메쏘드 delete
console.log(members);
delete members[4];
console.log(members); // 4번 엘리먼트가 지워지고 'empty'로 표시. 이건 완벽하게 지워졌다고 보기 어려움
// 완전히 삭제하기 위해서는 배열이 가지고 있는 메소드를 활용하는것이 올바른 방법이다.

// 배열에서 요소 삭제하는 메쏘드 splice
// splice (startIndex, deleteCount, item) 삭제할 갯수를 전달하지 않으면 시작한인덱스 이후의 모든 값을 삭제.
// splice메쏘드의 활용은 3번째 파라미터 부터! 삭제할 요소에 item 값이 추가가된다(1개이상 가능).

members.splice(4); // 전달받은 파라미터가 1개일때 파라미터 값 이후로 부터 모든 엘리먼트 삭제
console.log(members);

// members.splice(1, 1); 전달받은 파라미터 값이 2개일 경우 첫 번째 파라미터 인덱스 부터,
// 두번째 파라미터 만큼 갯수 삭제
// 위 members.splice(1, 1);를 예로들면 1번 인덱스 부터 1개값 삭제. 즉 1번 인덱스만 삭제
// 하나를 사용할 때랑 차이점은 시작 값이 삭제 되느냐 안되는냐!!!
// 파라미터가 하나일 경우는 인데스 번호의 요소는 삭제되지 않고, 두개일 경우는 그 값이 삭제

// splice 메소드 활용하기.
members.splice(1, 1, 'HelloCodeit', 'HiCodeit');
console.log(members);

// splice 메소드 응용하기.

// 추가하기 기능
// members.splice(1, 0, 'HelloCodeit', 'HiCodeit'); 갯수값을 0으로 하면 요소값을 그냥 추가만 가능
// console.log(members);

// 변경하기 기능
// members.splice(2, 2, 'MaumNo', '산토기'); 갯수값을 0으로 하면 요소값을 그냥 추가만 가능
// console.log(members);


// 5. 배열의 메소드 (Array's Method)
console.log(members);

// 배열의 첫 요소를 삭제 : shift() -> 파라미터가 없다. 첫 요소를 삭제하고 나머지 요소의 index를 앞으로 당겨온다.
members.shift();
console.log(members);

// 배열의 마지막 요소를 삭제 : pop() -> 파라미터가 없다. 마지막 요소를 삭제
members.pop();
console.log(members);

// 배열의 첫 요소로 값 추가 : unshift(추가할 값) -> 첫 요소로 값을 추가. 파라미터로 추가할 값을 전달 받는다.
members.unshift('NiceCodeit');
console.log(members);

// 배열의 마지막 요소로 값 추가 : push(추가할 값) -> 어떤 값을 마지막 요소로 추가. 파라미터로 추가할 값을 받는다.
members.push('HiCodeit');
console.log(members);

// 배열의 메소드는 코드를 간결하고 깔끔하게 만들 수 있게 도와준다.


console.log('< 배열 메소드 Tip >');
// 6. 배열 메소드 Tip

console.log('< 1)배열에서 특정 값 찾기 (indexOf / lastIndexOf) >');
// 1) 배열에서 특정 값 찾기 (indexOf / lastIndexOf)
// 배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면된다.

// array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있다.
// (1) 만약 포함되어 있다면, item이 있는 인덱스가 리턴.
// (2) 포함되어 있지 않다면, -1이 리턴된다.
// (3) 여러번 포함되어 있으면, 처음 발견된 인덱스가 리턴.
let brands = ['Google', 'kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); // 1
console.log(brands.indexOf('Daum')); // -1

// lasteIndexOf. indexOf와는 반대로 탐색을 뒤에서 부터 한다.
// 위의 코드에서 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴
console.log(brands.indexOf('Kakao')); // 3
console.log(brands.indexOf('Daum')); // -1

console.log('< 2) 배열에서 특정 값이 있는지 확인하기 (includes) >');
// 2) 배열에서 특정 값이 있는지 확인하기 (includes)
// indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려준다.
// 하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하는 경우도 있다.
// 그럴때 includes 라는 메소드를 활용.

// array.includes(item)을 하게되면 array 배열에서 item이 있을 경우 true를,
// 없을 경우 false 를 리던한다.
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));

console.log('< 3) 배열 뒤집기 (reverse) >');
// 3) 배열 뒤집기 (reverse)
// reverse 라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있다.
console.log(brands);
brands.reverse();
console.log(brands);