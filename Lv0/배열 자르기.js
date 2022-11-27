function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}
// splice( start : 자르기 시작할 인덱스, deleteCount : start부터 어디까지 삭제할지에 대한 int 값(삭제할 요소의 개수), /추가할 값)
// 제거된 요소들을 반환합니다 (기존 배열에 영향을 줍니다)

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
// slice(start : 추출을 시작할 인덱스, end: 추출을 끝낼 인덱스)
// end 파라미터는 지정된 인덱스를 포함하여 끝내지않고 지정된 인덱스 앞에서 추출을 끝냅니다
// 추출된 요소들이 새로운 배열에 담겨 반환됩니다 (기존 배열에 영향을 주지 않습니다)
