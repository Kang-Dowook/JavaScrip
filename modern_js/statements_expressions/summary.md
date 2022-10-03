### 조건부 연산자 (Conditional operator)

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