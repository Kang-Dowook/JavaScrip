# 객체와 데이터
  자바스크립트의 모든 것이 다 객체이다! 객체는 자바스크립트에서 매우 중요하다.
  
  ### 1. 형태
    전체를 속성이라고 부른다.
    Key : value 형태.
    propertyName : propertyValue 로 부르기도함
    ```
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
    ```

  >- Property Name 주의사항!
  >- 1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러기호($) 중 하나로 시작!
  >- 2. 띄어쓰기 금지!
  >- 3. 하이픈(-) 사용금지
  >- 위 사항을 어겨야 하는 사항일때는 ''로 감싸주기.
  >- Property Value의 값을 모든 자료형 값이 가능. 객체도 가능

  ### 2. 객체 데이터 접근하기!
  >- 객체(Object)
  ```
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
  ```
  ###### 데이터 접근 방법
  >- 방법1. 점 표기법 (objectName.propertyName) -> 객체 데이터에 접근하는 가장 기본적이고 많이쓰는 방법.
  >- 점 표기법은 ''를 생략할 수 있는 표기법에는 접근불가.
  `console.log(codeit.bornYear);`

  >- 방법2. 대괄호 표기법 (objectName['propertyName'])
  `console.log(codeit['is Very Nice']);`
  ```
  let propertyName = 'name';
  console.log(codeit[propertyName]);
  ```

  >- 객체안의 객체에 접근하기.
  `console.log(codeit.bestCourse['title']);`

  >- 존재하기 않는값에 접근 -> undefined
  `console.log(codeit.bestCourse['teacher']);`

  >- 결론
  1. 객체는 변수에 담겨서 이름을 만든다.
  2. 점 표기법과 대괄호 표기법으로 값에 접근가능
  3. 존재하기 않는 값에 접근하면 undefined를 반환한다.