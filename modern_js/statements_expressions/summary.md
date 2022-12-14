# 조건부 연산자 (Conditional operator)

>- 삼항 연산자(Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자.
>- if문과 같은 원리로 조건에 따라 값을 결정할 때 활용된다.
```
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '함격입니다!' : '불합격입니다!';

console.log(passChecker(75));
```
>- 간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현가능한 장점이있다.
>- 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장을 작성할 수 없다는 한계가 있어 if문을 환벽하게 대체할 수는 없다.

# Spread 구문

>- 여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수가 있다.

```
const webPublishing = ['HTML', 'CSS'];
const interacticeWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```
>- Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있다.
>- 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼실 수 없다.

```
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: '태호', 1: '종훈', 2: '우재'}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript',
}
const newArray = [...topic]; // TypeError
```

# 모던한 프로퍼티 표기법
>- ES2015 이후부터는 자바스크립트에서 변수나 함수를 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다름과 같이 축햑해서 사용할 수있다.

```
function sayHi() {
  console.log('Hi!');
}

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title,
  birth,
  job.
  sayHi,
};

console.log(user); // {title: 'codeit', birth: 2017, job: '프로그래밍 강사', sayHi: f}
```

>- 뿐만아니라 아래 코드와 같이 대괄호를 활용하면 다양한 표현식으로 프로퍼티 네임을 작성할 수도 있어다.
```
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);
```

# 구조 분해 Destructuring
>- 배열과 개게와 같이 내부에 여러 값을 담고있는 데이터 타입을 다룰 때, Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따라 따로 할당해서 다룰 수가 있다.
```
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipadd, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형'
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
```

>- 함수에서 default parater, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있다.
```
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}

```

# 에러와 에러 객체
>- 자바스크립트에서 에러를 다루는 일은 괴장히 중요.
>- 자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않기 때문.

>- 그리고 에러가 발생하면 에러에 대한 정보를 `name`과 `message`라는 프로퍼티로 담고 있는 <b>에러 객체</b>가 만들어진다.
>- 대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError가 있다.

>- 에러 객체는 직접 만들 수도 있다.
>- `new` 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고,
>- `throw` 키워드로 에러를 발생시킬 수 있다.

` throw new TypeError('타입 에러가 발생했습니다.');`

# try catch문
>- try catch문은 자바스크립트에서 대표적인 에러 처리 방법이다.
```
// 문법 형태
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
}
```
>- try문 안에서 실행할 코드를 작성하고, try문에서 에러가 발생한 경우에 실행할 코드를 catch문 안에 작성하면된다.
>- 이 때 try문에서 발생한 에러 객체가 catch문의 첫 번째 파라미터로 전달된다.
>- 만약, try문에서 에러가 발생하지 않을 경우 catch문의 코드는 동작하지 않는다.

>- 그리고 try catch문에서 에러의 유무와 상관 없이 하상 동작해야할 코드가 필요하다면 finally문을 활용할 수있다.
```
// 문법형태
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
} finally {
  // 항상 실행할 코드
}
```