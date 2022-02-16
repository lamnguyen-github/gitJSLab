// using for...i to loop from 1 to n
function getDivisorListV1(n) {
    // your code here
    if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return [];

    let result = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    // your code here
    if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return [];

    const result = Array.from({ length: n }, (_, i) => i + 1);
    return result.filter((x) => n % x === 0);
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
    // your code here
    if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return [];

    const result = [];
    const createArray = Array.from({ length: n }, (_, i) => i + 1);
    createArray.forEach((ele) => {
        if (n % ele === 0) {
            result.push(ele);
        }
    });
    return result.sort((a, b) => a - b);
}
console.log(getDivisorListV1(10));