function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// Number 대신에 split 다음 과정에서 .map(x=>parseInt(x)) 도 가능하다

// n의 각 자리수를 10으로 나눈 나머지를 하나의 변수에 더해주는 방식으로도 풀이 가능하다
function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return result;
}
