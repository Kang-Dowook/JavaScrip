// for ...of
// 굳이 for...of문이 아니더라도 lenght와 for문으로도 같은 기능의 반복문을 만들 수 있다.
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']

for (i = 0; i <= influencer.length; i++) {
  console.log(influencer[i]);
}

// 하지만 for of문을 사용하면 코드를 훨신 더 간결하게 만들 수 있다.
// 형태
// for (변수(요소) of 배열) { for in문의 형태는 'for (let propertyName in object)'
//   동작부분;
// }

for (let element of influencer) {
  console.log(element);
}
// 배열의 요소를 대상으로 반복적인 작업을 할때 for of문의 활용도가 높다

// 배열에도 for in문이 적용가능!! propertyName === index!!
for (let index in influencer) {
  console.log(influencer[index]);
}
// 기능이 똑같아 보이지만 for in문은 객체에 최적화 되어있다. 그리고 만약 배열에 메소드가 포함되어 있으면
// 기능이 생각지 못한 방향으로 흘러갈 수 가있다. 그래서 배열에 사용을 권장하지 않는다.



// ✨실습과제. 투표 집계하기✨

// 자바스크립트 배열 votes에는 학생회 투표 결과가 저장되어 있습니다.
// 배열 votes의 정보를 토대로, 객체 voteCounter에 후보별 득표수를 정리하는 것이 목표.
// 예를 들어 votes가 ['장태환', '신성순', '신성순', '장태환', '장태환']라고 가정하면
// voteCounter는 {'장태환': 3, '신성순: 2}가 되어야 한다.
// 결과값은 { '이재식': 17, '이규하': 23 }

// 답안
// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
  if (name in voteCounter) {
    voteCounter[name]+= 1;
  } else {
    voteCounter[name] = 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);