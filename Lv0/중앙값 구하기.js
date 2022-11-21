function solution(array) {
  let index = Math.ceil(array.length / 2) - 1;
  array.sort((a, b) => a - b);
  return array[index];
}
