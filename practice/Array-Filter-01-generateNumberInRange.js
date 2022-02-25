function generateNumberInRange(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}
console.log(generateNumberInRange(1, 5));