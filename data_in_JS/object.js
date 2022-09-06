// 자바스크립트의 모든 것이 다 객체이다!
// 객체는 매우 중요하다.
// 형태


// 전체를 속성이라고 부른다.
// Key : value 형태.
// propertyName : propertyValue 로 부르기도함
console.log(typeof {
  brandName: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
})
  

// Property Name 주의사항!
// 1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러기호($) 중 하나로 시작!
// 2. 띄어쓰기 금지!
// 3. 하이픈(-) 사용금지
// 위 사항을 어겨야 하는 사항일때는 ''로 감싸주기.
// Property Value의 값을 모든 자료형 값이 가능. 객체도 가능