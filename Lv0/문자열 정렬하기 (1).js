function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => parseInt(n));
}

function solution(my_string) {
  return (
    my_string
      .split("")
      .filter((v) => !isNaN(v))
      .map((v) => v * 1)
      // 각 요소가 스트링 타입이라 이를 넘버로 바꾸기 위해 *1 처리
      .sort((a, b) => a - b)
  );
}
// .filter((v) => !isNaN(v)) 에서 => +v 로 하면 0이 나오지 않을까?
// 테스트 3: "abcde0" => [0] ([]로 나옴.)
