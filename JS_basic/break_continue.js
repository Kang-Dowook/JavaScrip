// break와 continue
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

// break는 switch문 외에도 반복문에서도 사용할 수있다.
console.log('break')

let i = 1;
while (i <= 10) {
  console.log(i);
  if (i === 7){
    break;
  }
  i++;
}

console.log('break_for문')

for (let i = 1; i <= 10; i++) {
  console.log(i)
  if (i === 7) {
    break;
  }
}

console.log('constinue')
// continue.
// break가 반복문을 빠져 나오는거라면, continue는 동작 부분을 하나 건너 뛰는 것.
// 즉, 동작부분을 건너뛰고 추가동작 부분인 i++가 실행된다.
// if문 밑에 console.log가 생략되는것.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0){
    continue;
  }
  console.log(i);
}

console.log('constinue_while문')

let j = 1;

while (j <= 10) {
  if (j % 2 === 0) {
    j++ // while문에는 추가 조건이 없기 때문에 j값을 증가하지 않으면 if문 안에서 무한 루프 발생.
    continue;
  }
  console.log(j)
  j++
}