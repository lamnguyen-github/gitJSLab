// using for...i
function createArrayInRangeV1(a, b) {
    // your code here
    if (a > b || a < -100 || b > 100) return null;

    const result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
    // your code here
    if (a > b || a < -100 || b > 100) return null;


    return Array.from({ length: b - a + 1 }, (_, i) => a + i)
}
console.log(createArrayInRangeV2(3, 8));