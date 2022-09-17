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

  ###### 2. 객체 데이터 접근하기!
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
  #### 데이터 접근 방법
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

##### for .. in 주의사항.
  for in문을 활용하면 객체 내부에 있는 모든 프로퍼티들을 하나씩 다룰 수 있다고 배웠습니다.
  지금까지 살펴본 바로는, for in 반복문이 실행될 때 따로 정해진 순서 없이 객체에 추가한 순서를 따라서 반복문이 수행된걸 볼 수 있는데요.
  그런데 이 코드를 한번 보세요.
  ```
  let myObject = {
    '2': '알고리즘의 정석',
    '3': '컴퓨터 개론',
    '1': '자바스크립트 프로그래밍 기초',
  };

  for (let key in myObject) {
    console.log(myObject[key]);
  }
  결과값
  자바스크립트 프로그래밍 기초
  알고리즘의 정석
  컴퓨터 개론
  ```
  분명히 객체를 작성할 때는 알고리즘의 정석, 컴퓨터 개론, 자바스크립트 프로그래밍 기초 순서로 작성했는데, 뭔가 우리가 작성한 순서와 다르게 for in 반복문이 수행되었습니다.
  왜 이렇게 된 걸까요!? 객체의 프로퍼티는 어떤 순서로 정렬이 되는 걸까요!?
  반복문을 사용할 때 이 순서를 알지 못하면, 방금처럼 의도치 않은 결과를 얻게 될 수도 있습니다. 상황에 따라서는 치명적인 오류로 이어질 수도 있겠죠? 그럼 객체의 프로퍼티 네임의 예외사항과 함께 객체의 정렬 방식에 대해서 조금 더 살펴봅시다.
  
  ### 숫자형(양수) 프로퍼티 네임
  흔한 경우는 아니라서, 처음 객체를 배우는 레슨에서 다루진 않았지만 사실 프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있습니다.
  ```
  let myObject = {
    300: '정수',
    1.2: '소수',
  };
  ```
  다만 실제로 사용될 때는 문자열로 형 변환이 되어 사용되는데요.
  ```
  let myObject = {
    300: '정수',
    1.2: '소수',
  };

  for (let key in myObject) {
    console.log(`${key}의 자료형은 ${typeof key}입니다.`);
  }

  결과값
  300의 자료형은 string입니다.
  1.2의 자료형은 string입니다.
  ```
  이렇게 for in 문을 활용해서 각 프로퍼티 네임들의 자료형을 확인해보면, 모두 string, 문자열이 출력되는걸 볼 수 있습니다.

  그리고 이렇게 예외적인 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능합니다.
  ```
  let myObject = {
    300: '정수',
    1.2: '소수',
  };

  console.log(myObject['300']);
  console.log(myObject['1.2']);
  console.log(myObject.300); // Error!
  console.log(myObject.1.2); // Error!
  ```

  ### 정수형 프로퍼티 네임
  객체의 프로퍼티 네임으로 숫자형을 그대로 사용할 수도 있다는 점을 살펴봤는데요. 
  for in문을 사용할 때 주의해야 할 순간은 바로 정수형 프로퍼티 네임이 있을 때 입니다.
  객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.
  ```
  let myObject = {
    3: '정수3',
    name: 'codeit',
    1: '정수1',
    birthDay: '2017.5.17',
    2: '정수2',
  };

  for (let key in myObject) {
    console.log(key);
  }

  결과값
  1
  2
  3
  name
  birthDay
  ```
  분명히 3, name, 1, birthday, 2순서로 프로퍼티가 작성되었음에도 불구하고, for in문이 실행될 때는 오름차순으로 정렬이 되어 출력이 된 모습을 확인할 수 있습니다.
  굳이 for문을 그대로 작성하지 않고도 그냥 콘솔에 myObject를 콘솔에 출력만 해봐도
  {1: "정수1", 2: "정수2", 3: "정수3", name: "codeit", birthDay: "2017.5.17"}
  체가 정수형 프로퍼티에 한해서 오름차순으로 정렬이 되고 나머지는 추가한 순서대로 정렬이 되는 걸 확인할 수 있죠?
  처음에 살펴봤던 것처럼 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들더라도, 정렬방식은 동일하게 처리됩니다.
  ```
  let myObject = {
    '3': '정수3',
    name: 'codeit',
    '1': '정수1',
    birthDay: '2017.5.17',
    '2': '정수2',
  };

  for (let key in myObject) {
    console.log(key);
  }

  결과값
  1
  2
  3
  name
  birthDay
  ```
  자동으로 정렬되는 특성이 장점처럼 느껴질 수도 있지만 대부분의 경우에는 의도치 않은 결과를 가져올 수도 있기 때문에, 일반적으로 정수형 프로퍼티는 잘 사용되지 않는데요.

  그래서 불가피한 경우에는 이런 객체의 정렬방식을 잘 이해한 상태에서 사용하고, 가급적 명확한 의미가 있는 프로퍼티 네임을 사용하시는걸 권장해 드립니다.

Math객체의 '삼각함수 계산'이나 '로그'같은 더 깊은 수학 계산도 기능이 궁금하면 링크 참고
<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math"> Math 객체</a>
