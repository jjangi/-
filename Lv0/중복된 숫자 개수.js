let solution = (array, n) => {
  let result = 0;
  array.forEach((value) => {
    if (value === n) {
      result += 1;
    }
  });
  return result;
};
