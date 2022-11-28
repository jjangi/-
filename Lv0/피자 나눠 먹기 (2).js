function solution(n) {
  let answer = 1;
  while (true) {
    if (answer % n === 0 && answer % 6 === 0) {
      break;
    }
    answer++;
  }
  // 피자가 6조각이므로 n과 6의 최소공배수를 구한다
  return answer / 6;
  // 문제에서는 피자 판의 개수를 요구하므로 6을 나누어 값을 반환한다
}
