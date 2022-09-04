# typeof 연산자

### 형태 typeof 값

  ```
  console.log(typeof 100);
  console.log(typeof 'codeit');
  console.log(typeof true);
  console.log(typeof '1');
  console.log(typeof "1");
  console.log(typeof \`1\`); 
  ```

### typeof 와 사칙연산

  `console.log(typeof 'Hello' + 'Codeit');`
  `console.log(typeof 8 - 3);`
  `결과 값 : stringCodeit, not a number`

  연산의 순서가 원하지 않은방향으로 이루어 졌기 때문에 예상 밖의 결과가 나온다.
  typeof 연산자는 사칙연산자보다 우선순위가 높다.

  (typeof 'Hello' + 'Codeit')의 경우 typeof 'Hello'가 먼저 연산되고
  사칙 연산이 이루어져 typeof 'Hello'의 결과 값 string이
  'Codeit'과 사칙 연산이 이루어진것임.

  두번째 예시의 경우 typeof 8이 먼저 연산되어 number라는 값이 도출.
  그리고 number라는 문자열과 숫자 3이 사칙연산이 이루어지기 때문에not a number 값이 도출.

  >- 해결하기 위해서는 ()를 이용해서 해결가능하다.

# 형 변환(Type Conversion)

### Strin, Number, Boolean
  >- 문자열로 만들고 싶을때는 String
  >- 순자로 만들고 싶을때는 Nmuber
  >- 불린 값으로 만들고 싶을때는 Boolean
  일반적으로 Boolean값으로 변환하면 true가 도출된다. false가 되는 값을 기억하는것이 편한다

  >- false가 되는 경우
  >- 비어있는 값(''), 숫자 0, NaN. 이러한 값을 Falsy값이라고 한다.
  <br>

  >- Boolean값을 숫자로 만들때, 1은 true, 0은 false를 반환한다.

### 자바스크립트 자동 형변환
  ###### 1. 산술 연산(+, -, *, /, %, **)
  >- `console.log(4 + '2')` // 결과값 42
  자바스크립트에서 연산은 숫자의 연산보다 문자연산을 우선순위로 본다. 모두 문자로 취급하여 연산한다.
  <br>
  
  >- `console.log(4 / '2')` // 결과값 2
  이 경우는 나누기가 적용되었기 때문에 문자열을 우선적으로 숫자로 바꾸어 줬다. 자료형 보다 사칙연산이 위선 순위라고 판단한것 같다.

  >- `console.log(4 - true)` // 결과값 3
  >- `console.log(4 * false)` // 결과값 0
  Boolean값을 숫자로 변환하여 연산된 결과.

  ###### 2. 관계 비교 연산( <, <=, >, >=)
  >- `console.log(2 < '3');` // true
  >- `console.log(2 > true);` // true
  >- `console.log('2' <= false);` // false
  >- `console.log('two' >= 1);` // false
  비교연산자는 숫자형 끼리의 비교이기 때문에 문자열과 불릿 값이 숫자형으로 변환되어 비교한다.
  그리고 비교가 불가능한 경우에 false를 반환한다.

  ###### 3. 같음 비교 연산(===(일치), !==(불일치), ==(동등), !=(부등))
  >- `console.log(1 === '1');` // false
  >- `console.log(1 === true);` // false
  >- `console.log(1 == '1');` // true
  >- `console.log(1 == true);` // true
  일치(===)는 형변환이 이루어 지지 않아 false 값을 반환
  동등(==)은 형변환이 이러나 true 값을 반환한다.

  ### 템플릿 문자열 (template strings)
  일정한 형식 또는 틀이 있는 문자열

  >- 백틱(``)과 ${}를 활용.
  >- `let year = 2018;`
  >- `let month = 3;`
  >- `let day = 11;`
  >- `console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');`
  >- `console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);`

# null과 undefined
  자바스크립트 자료형에는 숫자, 문자, 불린값 이외에도 null, undefined가 있다.
  
  ### 값이 없다.
  null과 undefined는 둘다 '값이 없다'를 의미한다.
  >- null : 의도적으로 표현할 때 사용하는 값. (의도적으로 없음!)
  >- undefined : 코드를 실행 할때 값이 없다는 것을 확인하는 값. (처음부터 없음!)
  서로 다른 자료형이기 때문에 === 비교시 false 출력.

# 할당 연산자(Assignment operators)
  `let x = 5;`
  `x = x - 2;` 
  할당 연산자. 오른쪽의 피연산자를 왼쪽 피연산자에게 할당(대입) 한다. 
  해석은 오른쪽 부터 해석 후 오른쪽에 대입한다.

  ### 복합 할당 연산자
  x += 1과 같이 등호와 연산을 함께 사용해면 x = x + 1과 같은 의미인것을 인지.

  ### 증가, 감소 연산자
  변수의 값을 1씩 증가 또는 감소시킬 때는 복합 할당 연산자보다 더 간략하게 x++ 또는 x-- 처럼 사용할 수 있다.

# return문
  return문은 값을 전달하는것 뿐만 아니라 함수를 중단하는 기능도 있다.
  ```
  function exSquare(x) {
  console.log('return 전')
  return x * x
  console.log('return 후') // Dead코드 
  }
  ```
  ### return문과 차이
  ```
  function printSquare(x) {
    console.log(x * x);
  }

  printSquare(3);
  // 결과값 9
  ```
  ```
  function getSquare(x) {
    return x * x;
  }
  
  getSquare(3);
  // return문이 없는 함수는 결과값으로 undefined값을 반환한다.
  // return을 하지 않으면 undefined를 반환한다는 것을 기억하자. 
  ```

# 옵셔널 파라미터(Optional Parameters)
  변수의 파라미터값을 주지 않으면 undefined가 결과 값이지만 옵셔널 파라미터의 경우 기본값을 설정하여, 값을 줄수도 변경시킬 수도있다.

  ```
  function introduce(name, age, nationality = '한국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살 이고,`);
    console.log(`국적은 ${nationality}입니다.`);
  }
  ```

  >- nationality의 경우가 옵셔널 파라미터이다.
  >- 옵셔널 파라미터를 사용할 때는 변수 내 파라미터 값의 위치를 가장 마지막에 두도록 한다.
  >- 변수 연산이 밀리는 경우가 발생하기 때문이다.

# Scope
  사전적 의미로 '범위', '영역'으로 변수의 유효범위에 대한 개념.
  `let x = 3;`
  `function myFunction() { // 중괄호를 블록문(Block Statement문)이라고 한다.`
  ` let x = 5;            // 블록문 내의 변수를 로컬(지역) 변수라고 한다.`
  ` console.log(x);`
  `}`

  `myFunction();`
  `console.log(x); // (글로벌 변수 let x= 3이 없을때)변수 x가 정의되지 않았기 때문에 오류발생. let x = 5는 블록문 내에서만 효력 발휘.`
  `                // 글로벌 변수는 블록문 내에 영향을 미치지만 같은 변수가 블록문 내에 있을경우 로컬 변수를 우선적으로 변수로 선정`

# 상수
  >- 변하지 않고 일정한 값을 유지하는 변수를 상수라고한다.
  >- 상수는 const로 선언한다.
  >- 상수는 모두 대문자로 표시하고, 변수 이름이 2단어 이상일때 _(언더바)를 사용하여 표시한다.
  >- ex) const MY_NUMBER
  `const PI = 3.14;`

# if(if statement)문
  >- 조건을 충족하지 못하면 실행하지 않을 수 도있다.
  ### if와 else
  ```
  let temperature = 200;

  if (temperature <= 0) {
    console.log('물이 업니다.');
  } else {
    if (temperature < 100) {
      console.log('물이 얼지도 끓지도 않습니다.');
    } else {
      if (temperature < 150) {
        console.log('물이 끓습니다.');
      } else {
        console.log('물이 모두 수증기가 되었습니다.');
      }
    }
  }
  ```
  ### else if문
  ```
  if (temperature <= 0) {
    console.log('물이 업니다.');
  } else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
  } else if (temperature < 150) {
    console.log('물이 끓습니다.');
  } else {
    console.log('물이 모두 수증기가 되었습니다.')
  }
  ```
  >- if문은 else와 함께 쓰이는데, 조건이 많을 경우 else 부분 않에 if문을 다시 작성하여 조건을 만들어나간다.
  >- 하지만 이렇게 조건을 나열할 경우 가독성이 떯어지고 코드가 길어지기 때문에 'else if'문을 사용하여 효과적으로 줄 일 수있다.

# Switch문 
  1. switch문 (switch statement)
  2. 선택에 따른 다른 결과값을 도출하는 문법
  3. 기분구조
  ```
  switch (비교할_값) { // 비교값이 모두 동일할때 사용.
    case 조건값_1: // 조건에 맞는 비교값 대입.
      동작부분;
      break; // 스위치 문을 빠져나오는것.
    case 조건값_2:
      동작부분;
      break; // break가 없을 경우 조건에 맞는 값 부터 default까지 모두 실행.
    default: // 비교할 값이 모든 조건과 일치 하지 않을때 작성할 값. 조건에 따라 생략 가능.
      동작부분;
  }
  ```
  if문과 switch 문은 비슷한 기능을 하지만 상황에 따라 각각 장점이 있다.
  <b>어떤 넓은 범위를 만족하는 조건식</b>을 만들 때는 if문을 활용하는것이 효과적이고,
  <b>특정한 값에 일치하는 조건</b>을 만들 때는 switch문이 더 효과적이다.
  switch문의 경우 자료형을 엄격하게 구분하기에 문제는 없지만, if문의 경우 자료형의 비교시 '===' 일치비교는 매우 중요하다.

# for 반복문
  기본형태
  ```
  for (초기화부분; 조건부분; 추가동작부분) {
    동작부분
  }
  ```
  >- 초기화부분 = for문이 시작할때 딱 한번만 실행되는 부분
  >- 조건부분 = if문과 동일하게 boolean으로 평가해 true면, 동작부분을 실행
  >- 추가동작부분 = 조건 부분이 true일 때 동작부분을 실행하고 그 다음으로 추가적으로 동작할 부분을 작성
