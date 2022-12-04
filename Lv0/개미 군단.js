function solution(hp) {
  let answer = 0;
  answer += Math.floor(hp / 5);
  hp = hp % 5;
  answer += Math.floor(hp / 3);
  hp = hp % 3;
  answer += Math.floor(hp / 1);
  hp = hp % 1;
  return answer;
}

function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
