// 코딩테스트 중 eval을 사용하지 못하도록 막아놓은 곳이 있습니다. 참고하세요.
//  -> 직접 계산기 코드 구현해서 풀이해야.
eval();
eval("10 + 10");
// 20
eval("10 - 3");
// 7
eval("5 + 6 = 11"); // error
eval("5 + 6 == 11"); // true

// quiz: ["3 - 4 = -3", "5 + 6 = 11"] -> result: ["X", "O"]
function solution(quiz) {
  let result = [];
  for (item of quiz) {
    const 연산식 = eval(item.split(" = ")[0]);
    const 결과값 = +item.split(" = ")[1];
    result.push(eval(연산식) === 결과값 ? "O" : "X");
  }
  return result;
}
