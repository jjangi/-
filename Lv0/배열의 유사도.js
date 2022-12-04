function solution(s1, s2) {
  let count = 0;
  s1.forEach((one) => {
    s2.forEach((two) => {
      one === two ? count++ : null;
    });
  });
  return count;
}

function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
