// forEach와 map
const members = ['영훈', '윤수', '동욱', '태호'];

// 배열의 요소를 하나씩 살펴보면서 반복적인 동작을 할때 for of 문을 사용했다.
for (let memeber of members) {
  console.log(`${member}님이 입장하셨습니다.`)
}

// ### forEach
// forEach문은 호출할 때 아규면트로 콜백함수를 작성하면,
// 콜백함수의 첫 파라미터로 배열의 요소를 순서대로 하나씩 전달하며, 함수를 실행.
// 콜백함수에는 반듯이 파라미터가 작성되어야 한다.
// member 는 for of 문의 member와 같은 역할.
members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
});

// forEach문은 콜백함수에서 다룰 수 있는 2가지 파라미터가 더 있다.
// 첫 파라미터는 배열의 요소가 있어야되기 때문에 반듯이 잇어야하고
// 두 번째 파라미터는 요소의 index를 관리 하는 i
members.forEach((member, i) => {
  console.log(`${i} ${member}님이 입장하셨습니다.`);
});

const firstNames = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

firstNames.forEach((firstName, i, arr) => {
  console.log(`${lastNames[i]} ${firstNames}님이 입장하셨습니다.`)
  console.log(arr);
})
// 마지막 세 번째 파라미터는 반복적인 배열이 전달.

// ### map
// forEach와 동작하는 방식이 거의 비슷.
// map은 forEach와 다른점은 리턴결과로 새로운 배열을 리턴한다는것.
// map 메소드는 콜백함수 내에서 리턴문을 작성해 주면 각각의 리턴값으로 구성된 새로운 배열이 메소드의 결과로 리턴됨.
const fullNames = firstNames.map((firstName, i) => {
  return lastNames[i] + firstName;
});

console.log(fullNames); // map을 forEach로 바꾸게 되면 리턴값이 없기 때문에 undefined를 가짐
// 단순 배열의 반복작업이 필요하면 forEach를 반복작업을 통해 새로운 배열이 필요하면 map 메소드를 활용.

// 주의할점 : 두 메소드의 최대 반복횟수는 메소드를 처음 호출할때 그 당시의 요소 갯수이다.
// 두 메소드 모두 반복중인 배열에서 편집할 수 있다.
// 매번 반복할때마다 추가하게되면 무한 루프가 발생할거라 생각할 수 있지만 딱 초기 배열의 갯수만큼만 호출
members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
  members.push('코드잇');
});

console.log(members);

// 하지만, 반복중에 배열의 길이가 줄어드는 경우 반복 횟수도 줄어든다는점 기억!!!
members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
  members.pop();
});

console.log(members);