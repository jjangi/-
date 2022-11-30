// polynomial: "3x + 7 + x" -> result: "4x + 7"

function solution(polynomial) {
  let arr = [];
  arr.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  arr.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );

  let result = [];
  if (arr[0]) result.push(`${arr[0] === 1 ? "" : arr[0]}x`);
  // 1x 면 계수를 제거하고 아니면 그대로 x의 계수로 사용하기 위해 삼항 연산자 사용
  if (arr[1]) result.push(arr[1]);

  return result.join(" + ");
  // ex. ['3x', 5].join(' + ') < '3x + 5'
}
