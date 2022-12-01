function solution(n) {
  let answer = 2;
  for (let i = 2; i < n; i++) {
    if (i * i === n) {
      answer = 1;
      break;
    }
  }
  return answer;
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
