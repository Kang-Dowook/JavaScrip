// for .. in 반복문
// 객체안의 property를 가지고 반복적인 작업을 할 때 사용.
// 객체의 propertyName을 가져오는 반복문. 일반적인 for문으로 대체하기 힘듬
// 기본 형태

// for (변수 in 객체) { // 객체의 prorpertyName이 변수에 할당되고 propertyName갯수만큼 반복
//   동작부분
// }

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit) { // 변수이름은 상관 없음
  console.log(key);
  console.log(codeit[key]);
}