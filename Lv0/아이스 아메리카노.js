// function solution(money) {
//     let answer = []
//     answer.push(Math.floor(money / 5500))
//     answer.push(money - (5500 * Math.floor(money / 5500)))
//     return answer
// }

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
// 그냥 바로 배열에다가 값 두개를 넣어서 반환하면 되겠구나!
