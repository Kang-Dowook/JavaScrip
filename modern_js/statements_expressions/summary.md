# 조건부 연산자 (Conditional operator)

>- 삼항 연산자(Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자.
>- if문과 같은 원리로 조건에 따라 값을 결정할 때 활용된다.
```
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '함격입니다!' : '불합격입니다!';
```