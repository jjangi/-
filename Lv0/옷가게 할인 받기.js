function solution(price) {
  if (price >= 500000) return parseInt(price * (1 - 0.2));

  if (price >= 300000) return parseInt(price * (1 - 0.1));

  if (price >= 100000) return parseInt(price * (1 - 0.05));

  return price;
}

// 나의 풀이
function solution(price) {
  if (price >= 500000) {
    price = Math.floor(price * 0.8);
  } else if (price >= 300000) {
    price = Math.floor(price * 0.9);
  } else if (price >= 100000) {
    price = Math.floor(price * 0.95);
  }
  return price;
}
