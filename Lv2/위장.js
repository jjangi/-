function solution(clothes) {
  let answer = 1;
  let obj = {};
  // 빈 객체(obj)를 생성한다

  for (let i = 0; clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }
  // clothes 배열을 돌면서 의상의 종류를 key로, 의상 종류에 포함되는 옷의 개수를 value로 하는 프로퍼티를 객체(obj)에 할당한다
  // 해당 종류의 옷을 입지 않고 다른 종류의 옷을 입은 경우 , 기본값 1
  // 해당 종류의 옷을 입었을 경우 , 값 + 1
  // 해당 종류의 다른 옷을 입었을 경우 , 값 + 1

  for (let key in obj) {
    answer *= obj[key];
  }
  // 의상 종류의 개수만큼 모든 경우의 수(value)를 곱해준다.

  return answer - 1;
  // -1을 해준 이유는 의상을 모두 입지 않은 경우를 제외한 것이다
}
