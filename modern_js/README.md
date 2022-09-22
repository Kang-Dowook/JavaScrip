###### 모던자바스크립트란?

### ECMAScript
  >- 자바스크립트 표준 명세서(JsvaScript Specification)
  >- 문서의 명칭은 ECMA-262
  >- 자바스크립트의 버전 업데이트는 계속 진행.
  >- 이런 업데이트는 ecmaINTERNATIONAL이란 국제표준에 의해 관리됨
  >- ES6 (2015)부터 1년마다 새로운 버전을 출시하기 결정 (정식 명칭은 ES2015)
  >- ES6+(ES6 이후 버전들)의 문제점이 발생. 웹브라우저에서는 이러한 기능을 즉각적으로 반영하기 힘듬
  >- 변화하는 상황속에서 현시점에 사용하기 적합한 범위 내에서 최신버전의 표준을 준수하는 자바스크립트를 '모던자바스크립트'라고 한다.

### 이번 토픽 방향성
  >- JavaScript의 기본 개념을 더 견고하게 다질것.
  >- 새롭게 등장한 문법들 중 유용한 문법들을 공부
  >- 이러한 문법들을 모던하게 자바스크립트 활용하기.

### 1. 공식문서
  >- ECMAScript의 공식 문서
  >- <a href = 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'>ECMA-international 공시 ECMA-262문서</a>

### 2. 진행 현황
  >- 지금까지 제정된 ECMAScript 표준 사항이나 과거 역사
  >- <a href='https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>위키백과-ECMA스크립트</a>
  >- <a href='https://developer.mozilla.org/ko/docs/conflicting/Web/JavaScript/JavaScript_technologies_overview'>MDN문서</a>

### 3. 브라우저 지원 현황
  >- 각각의 문법별로 브라우저의 지원 여부를 확인하고 싶다면 아래 링크들을 참고
  >- <a href='http://kangax.github.io/compat-table/es6/'>한눈에 확인하는 호환성 테이블</a>
  >- <a href='https://caniuse.com/'>문법 검색으로 확인하는 호환성 테이블</a>

### 4. 버전의 정식 표기
  >- ES6부터는 연호를 사용해서 ES2015, ES2016이라고도 부른다.
  >- 개발자들 사이에서는 ES6, ES7이라는 용어를 사용. 실제로 ECMA International에서 버전을 발표할 때 표기하는 정식 명칭은  ECMAScript 2015.

### 5. JavaScript vs ECMAScript
  >- JavaScript와 ECMAScript 사이에는 명확한 차이가 있다.
  >- 첫 번째 차이점, JavaScript는 프로그래밍 언어이고, ECMAScript는 프로그래밍 언어의 표준.
  >- 쉽게 생각하면 ECMAScript는 JavaScript가 갖추어야 할 내용을 정리해둔 '설명서'
  >- JavaScript는 ECMAScript를 준수해서 만들어낸 '결과물'.
  >- 참고로 ECMAScript 뿐만아니라 모든 스크립트 언어(scripting languages)가 지켜야 하는 표준.
  >- 자바스크립트와 같은 언어를 만들고자 한다면, ECMAScript를 준수해야한다는것.
  >- 두 번째 차이점, JavaScript는 ECMAScript를 기반으로 하지만 ECMAScript에 정의된 내용뿐만 아니라, 다른 부가적인 기능도 있다는것.
  >- 특히, 우리가 자바스크립트로 HTML 코드를 제어하기 위해 사용하는 DOM(Document Object Model)을 다루는 문법들은 ECMAScript에 표준화된 문법이 아니라 WebIDL에서 표준화된 기술