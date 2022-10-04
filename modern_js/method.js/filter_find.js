// filter와 find
const devices = [
  {name : 'GalaxyNot', brand: 'Samsung'},
  {name : 'MacbookPro', brand: 'Apple'},
  {name : 'iPad', brand: 'Apple'},
  {name : 'GalaxyWatch', brand: 'Samsung'},
  {name : 'iMac', brand: 'Apple'},
  {name : 'GalaxyBuds', brand: 'Samsung'},
  {name : 'Gram', brand: 'LG'},
  {name : 'SurfacePro', brand: 'Microsoft'},
  {name : 'ZenBook', brand: 'Asus'},
  {name : 'MacbookAir', brand: 'Apple'},
];
// 여러가지 값중에 조건에 맞는 값들만 추려내고 싶을때 filter 사용
// filter 원하는 요소들만 추려내 새로운 배열을 만든다.

// filter method 형태
const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);

const myLaptop = devices.find((el) => el.name === 'Gram');

console.log(myLaptop); // filter는 하나의 값이라도 배열로 만들어 추출.
// 하나의 값을 원할때 find를 사용한다.

// filter와 find의 차이점
// 1. filter는 리턴값이 배열이고 find는 '값'
// 2. find는 하나만 찾는다. 반복횟수가 다르다.
const apples1 = devices.filter((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});
console.log(apples1);

const myLaptop1 = devices.find((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});
console.log(myLaptop1); // 없는 값을 찾을때는 전체를 찾아보고 결국 undefind를 리턴.
