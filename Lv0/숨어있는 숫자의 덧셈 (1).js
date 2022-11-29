function solution(my_string) {
  return (
    [...my_string] // or Array.from(my_string)
      .map((v) => +v)
      //[NaN, NaN, NaN, 1, NaN, 2, NaN, NaN, 3, 4, NaN, NaN, NaN]
      .filter((v) => !Number.isNaN(v))
      .reduce((a, c) => a + c, 0)
  );
}

function solution(my_string) {
  return my_string
    .match(/[\d]/g)
    .map((v) => +v)
    .reduce((a, c) => a + c, 0);
}

// * 간단 정규 표현식 정리
"aAb1B2cC34oOp".replace(/[a-zA-Z]/g, "!");
// '!!!1!2!!34!!!'
"aAb1B2cC34oOp".replace(/[a-zA-Z]/g, "");
// '1234'
"aAb1B2cC34oOp".replace(/[^\d]/g, ""); // /d 숫자에 해당하는 문자
// '1234'
"aAb1B2cC34oOp".replace(/[\D]/g, ""); //  /D 숫자가 아닌 문자
// '1234'

"abcAb1B2abcC34oOp".replaceAll("abc", "");
// 'Ab1B2C34oOp'
"abcAb1B2abcC34oOp".replaceAll(/[a-zA-Z]/g, "");
// '1234'

"aAb1B2cC34oOp".match(/[\d]/g);
// ['1', '2', '3', '4']
