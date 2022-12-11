function solution(array) {
    let arr = [...array]
    arr.sort((a,b)=>a-b)
    let answer = []
    answer.push(arr[arr.length-1])
    answer.push(array.indexOf(arr[arr.length-1]))
    return answer
}