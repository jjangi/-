function solution(rsp) {
  let win = {
    0: "5",
    2: "0",
    5: "2",
  };
  return rsp
    .split("")
    .map((v) => win[v])
    .join("");
}
