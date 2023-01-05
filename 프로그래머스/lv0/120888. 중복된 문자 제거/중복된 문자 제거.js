function solution(my_string) {
    return [...new Set(my_string)].join("");
}

function solution(my_string) {
    let s = new Set(Array.from(my_string));
    return [...s.values()].join("");
}