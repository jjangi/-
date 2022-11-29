function solution(my_string) {
  return (my_string.match(/\d+/g) || [0]).map((v) => +v).reduce((a, c) => a + c, 0);
  // || [0] <- 문자열에 자연수가 없는 경우 0을 return 하기 위함
}

solution("aAb1B2cC34oOp");
