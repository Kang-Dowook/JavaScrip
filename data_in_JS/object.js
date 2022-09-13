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

// 객체(Object)
let codeit = {
  name : '코드잇',
  bornYear : 2017,
  'is Very Nice' : true,
  worstCourse : null,
  bestCourse : {
    title : '자바스크립트 프로그래밍 기초',
    language : 'JavaScript'
  }
};

// 객체 속성(property)값 변경 방법
console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

// 객체 속성(property)값 추가 방법
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);

// 객체 속성(property)값 삭제 방법
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

// in 연산자
// 문법 : 'propertyName' in object
console.log(codeit.name !== undefined);
console.log('name' in codeit);

if ('name' in codeit) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log('name 프로퍼티는 존재하지 않습니다.');
}
// 둘다 값이 값은데 왜 in연산자를 쓰는걸까?
// in 연산자가 우선 짧아 이해가 쉽고 property를 확인할 때 더 '안전하다.'
// undefined값이 할당 되었거나, 코드 설계시 결과 값이 undefined값일 수 이씨 때문에.

// 실습문제
// 단어장 객체에 단어를 추가하고 삭제하고, 콘솔에 출력도 해주는 다양한 메소드를 만들어 사용해봅시다.

// 1. 단어를 추가하는 addVoca메소드를 만들어 주세요. 
// addVoca메소드는 영어단어와 뜻, 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드 입니다.
// 2. 단어를 삭제하는 deleteVoca메소드를 만들어 주세요.
// deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드 입니다.
// 3. 단어를 출력하는 printVoca메소드를 만들어 주세요. 
// printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포멧의 문자열을 콘솔에 출력하는 메소드 입니다. 특별한 포멧은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요.

let myVoca = {
  // 코드를 작성해 주세요.
  addVoca : function (english, korean) {
    return myVoca[`${english}`] = (`${korean}`)
  },
  deleteVoca : function (english) {
    return delete myVoca[`${english}`]
  },
  printVoca : function (english) {
    console.log(`"${english}"의 뜻은 "${myVoca[english]}"입니다.`)
  }
};

// 한 가지 조심해야 될 부분은 파라미터로 다른 변수에 담긴 값을 가져올 때는 ✨대괄호 표기법을 사용해 주어야 한다✨는 겁니다.

// 위 메소드에서 만약 ✨점 표기법으로 key값에 접근을 하게 되면, 파라미터 key를 가리키는 것이 아니라✨,

// myVoca에 ✨문자 그대로 key라는 프로퍼티 이름을 가진 프로퍼티 값에 접근하는 것과 같은 의미✨가 되기 때문이죠.