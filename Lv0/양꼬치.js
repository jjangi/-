let solution = (n, k) => {
  let service = 0;
  service = n / 10 >= 1 ? parseInt(n / 10) : 0;
  k = k - service;
  return 12000 * n + 2000 * k;
};
