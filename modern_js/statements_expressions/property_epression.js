// 모던한 프로퍼티 표기법

// 기존에 배웠던 표기법
const user = {
  title: 'Codeit',
  birth: 2017,
  job: '프로그래밍 강사',
};

// 변수에 할당된 값을 활용해서 프로퍼티를 만들 수 있다.
const title = 'Codeit';
const birth = 2017;
const job = '프로그래밍';

const users = {
  title, // 프로퍼티 네임과 활용할 변수의 이름이 똑같다면 -> 1개만 작성해도된다.
  birth,
  job,
}

console.log(users);

// 함수를 메소드로 만들때도 축양형 표기가 가능
function getFullName () {
  return `${this.firstName} ${this.lastName}`;
};

const name = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName,
};

const admine = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName,
};

console.log(name.getFullName());
console.log(admine.getFullName());

// 객체 내부에서 메소드를 선언할때도 활용할 수 있는 방법
const names = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName () { // 콜론과 function을 생략할 수 있다.
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(names.getFullName());

// 프로퍼티 네임을 표현식으로 나타내는 방법
// 계산된 속성명(computed property name)
const user2 = {
  [표현식]: 값, // 표현식을 대괄호로 감싸면 표현식을 프로퍼티 네임으로 사용할 수 있다.
};

const example = {
  ['Code' + 'it']: 'value',
};

console.log(example);
// 이런 방법은 변수에 담긴 값을 사용히거나 함수의 리턴값을 사용할 수 있다.

const propertyname = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyname]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);

console.log(codeit.propertyname); // undefined. 점표기법으로 propertyname 이라는 프로퍼티에 접근하는 것이디 때문에
                                  // codeit 객체에 존재하지 않는 프로퍼티에 접근하는 방법이라 undefined가 리턴

// 안전하게 프로퍼티에 접근하는 방법.

// ### 옵셔널 체이닝(Optional Chaining)
// ECMAScript2020에서 등장한 옵셔널 체이닝이라는 접근 방법.
// 일반적으로 개게의 프로퍼티는 점 표기법을 통해 접근하게 되는데
function printCatName (user) {
  console.log(user.cat.name);
}

const user3 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    bread: 'British Shorthair',
  }
}

printCatName(user3); // Crew
// 객체를 활용해서 데이터를 표현하다 보면 이렇게 중첩된 객체를 작성하게 될 일이 빈번하다
// 함수에서도 이런 중첨 객체의 프로퍼티를 활용할 일이 많은데,
// 함수 printCatName은 user 파라미터에 중첩된 cat 객체의 name 프로퍼티를 콘솔에 출력해주는 함수이다.
// 이렇게 중첩 객체를 다룰 때 한가지 조심해야 될 부분이 있다.
const name2 = {
  name: 'Young',
}

console.log(name2.cat); // undefined
printCatName(name2); // TypeError: Cannot read property 'name' of undefined
// 여러 가지 상황에 맞춰 데이터를 다루다 보면 예상한 프로퍼티를 가지고 있지 않을 수도 있다.
// cat 프로퍼티를 가지고 있지 않은 user2는 cat 프로퍼티가 undefined 이기 때문에 name2.cat.name에 접근하려는 순간 에러가 발생
// 그래서 printCatName 과 같이 중첩된 객체의 프로퍼티를 다룰 때, 
//user.cat.name에 접근하기 전에 user.cat 이 null 혹은 undefined 가 아니라는 것을 검증하고 접근해야 에러를 방지할 수 있다.

function printCatName(user) {
  console.log(user.cat && user.cat.name);
}
// if문을 활용할 수도 있지만, 일반적으로 간결하게 AND 연산자를 활용해서 이 문제를 해결하곤 했다.
// 이마저도 객체의 이름이나 프로퍼티의 이름이 기렁질수록 가독성이 나빠지는 문제가 발생

// 훨씬 더 코드를 간결하게 사용할 수 있는 문법이 바로 옵셔널 체이닝(Optional Chaining).
function printCatName(user) {
  console.log(user.cat?.name);
}
// 위 코드에서 볼 수 있는 것처럼 물음표와 마침표를 붙여 사용하는 부분이 바로 '옵셔널 체이닝 연산자(?.)이다.
// 만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null 이 아니라면 그 다음 프로퍼티 값을 리턴하고,
// 그렇지 않은 경우 undefined를 반환하는 문법

// 옵셔널 체이닝 연산자의 동작 원리를 삼항 연산자를 통해 구체적으로 표현하면 다음과 같이 작성 가능
function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}

// null 병합 연산자와 함게 활용하면 다음과 같이 응용가능
function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const userName = {
  name: 'Young',
}

printCatName(userName); // 함께 지내는 고양이가 없습니다.
// 자바스크립트에서 에러를 방지하는 일은 굉장히 중요
// 중첩된 객체를 다룰 때 에러를 방지하기 위해 다양한 방식을 활용할 수 있지만
// 옵셔널 체이닝 연산자를 활용하면 훨씬 더 간결하게 코드를 작성할 수 있다는 점. 기억!