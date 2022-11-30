// 일반 숫자 정렬
[10, 20, 30, 40, 32, 35, 37]
  .sort((a, b) => a - b)

  [
    // 어떠한 값(ex. 35) 기준 정렬
    (10, 20, 30, 40, 32, 35, 37)
  ].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35))

  [
    // 어떠한 값(ex. 35) 기준 정렬, 값이 같을 때에는 뒤에 ||
    // 어떠한 값과의 거리가 같을 경우에는 더 큰 숫자가 앞에 와야한다고 제시 -> b - a
    (10, 20, 30, 40, 32, 35, 37)
  ].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35) || b - a);

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
