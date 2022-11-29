function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// indexOf
function solution(str1, str2) {
  if (str1.indexOf(str2) === -1) {
    return 2;
  }
  return 1;
}

function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}

// split
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
