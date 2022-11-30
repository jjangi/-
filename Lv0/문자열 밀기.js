// slice나 for이용하면 어렵게 풀게 됩니다.
("ohell" + "ohell")
  .indexOf("hello")("lohel" + "lohel")
  .indexOf("hello");

function solution(A, B) {
  return (B + B).indexOf(A);
}

let solution = (A, B) => (B + B).indexOf(A);
//
//
// 회전 초밥 문제 처럼 몇 번씩 순회를 돌아야 하고, 중간에 먹는 초밥이 사라진다라고 하면 for를 이용합니다.
// 아래와 같이 for 문 안에 length가 줄어드는 것을 '이용'하셔야 합니다.
l = [10, 20, 30, 40, 50];
for (let i = 0; i < l.length; i++) {
  console.log(l.pop());
}
