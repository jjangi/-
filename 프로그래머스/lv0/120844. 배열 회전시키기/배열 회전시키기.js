function solution(numbers, direction) {
    let pop = 0;
    if (direction === 'left') {
        pop = numbers.shift()
        numbers.push(pop)
    } else if (direction = 'right') {
        pop = numbers.pop()
        numbers.unshift(pop)
    }
    
    return numbers
}