function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  // 원본 배열 emergency 가 보장되어야
  // -> [...emergency] or emergency.slice()
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
