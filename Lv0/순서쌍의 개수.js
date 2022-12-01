function solution(n) {
  let answer = 0;
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += 2;
    }
  }

  return Number.isInteger(Math.sqrt(n)) ? answer + 1 : answer;
}
// 첨에 이런 식으로 잘 접근했는데 범위를 그냥 n으로 둬서 약수의 개수를 다 잘 구해놓고서는 아래에서 2의 n제곱으로 계산해버림 ㅎㅎ
// 범위를 Math.sqrt(n)로 줄이고 +=2 하는게 실행 시간을 고려했을 때에도 더 좋은 코드인 것 같다!
// for 반복문에서 제곱근 n은 포함되지 않고 포함하면 별도의 조건문으로 +1만 해야함. 위 코드에서는 아래 return문에서 삼항연산자로 제곱근 n이 약수에 있을 시에 결과값에 1을 더해 반환함
