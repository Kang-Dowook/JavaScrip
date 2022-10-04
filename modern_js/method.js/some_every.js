// some과 every
// true 또는 false만들 리턴한다.
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el, i) => {
  console.log("some:", i);
  return el > 5;
}); // find와 유사하게 some은 조건을 만족하는 값이 나타나면 true를 키턴하고 코드 실행을 종류한다.


// every: 모든 요소가 조건을 만족하는지, 조건을 만족하지 않는 요소가 1개 이상있는지 확인하는 메소드로 사용하기도 한다.
const everyReturn = numbers.every((el) => {
  console.log('every:', i);
  return el > 5;
}); // every는 만족하지 않는 값을 발견하면 false를 리턴하고 종료.

console.log('some:', someReturn);
console.log('every:', everyReturn);

// 빈배열에 some과 every를 적용하면 각각 false와 true를 리턴한다.
// 요소 내에 조건에 맞는 값을 찾고 싶을때는 filter와 find를 활용할 수 있고
// 단순히 조건에 맞는지만 확인 하고싶을 때는 some과 every를 활용할 수 있다.