// reduce
const numbers = [1, 2, 3, 4];

numbers.reduce((acc, el, i, arr) =>{ // arr = 메소드를 호출한 배열이 전달. acc 는 accumulator(누산기)
  return nextAccValue; // acc 는 콜백함수가 매번 반복할때 직전 콜백함수가 리턴한 값을 전달 받는 파라미터.
}, initialAccValue);   // reduce 메소드에 활용되는 콜백함수는 다음 콜백함수의 accumulate에 전달할 값을 리턴해준다.
                       // 매 반복때 마다 콜백함수의 리턴값을 다음 콜백함수의 accumulate에 전달해주면서,
                       // 결국 마지막에 실행되는 콜백함수의 리턴 값이 리듀스 메소드의 최종값이 된다.
                       // accumulate의 첫 번째 값을 reduce의 두번째 파라미터로 전달해준다.

const sumAll = numbers.reduce((acc, el, i, arr) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
  console.log('acc:', acc);
  console.log('el:', el);
  console.log(`${acc} + ${el}`)
  console.log('--------');

  return acc + el;
}, 0); // 초기값은 선택사항이다. 하지만 없다면 코드는 0번 인덱스가 아닌 1번 인덱스 부터 실행하게된다.
       // 코드가 복잡할 수록 예상하기가 힘들어지기 때문에 가급적 초기값을 설정해두는것이 좋다.

console.log('sumAll:', sumAll);