function findAllNumbers(numberList) {
    let result = [];
    numberList.forEach((element) => {
        if (element % 2 === 0) {
            result.push(element);
        }
        if (result.length >= 2 && result[0] !== element) {
            result.pop();
        }
    });
    if (result.length < 2) result = [];
    result.shift();
    return result;
}

function findAllNumbersV2(numberList) {
    if (!Array.isArray(numberList)) return [];
    let cloneNumberList = [...numberList].filter((x) => x > 0);
    let assign = cloneNumberList.find((x) => x % 2 == 0);
    if (assign === -1) return [];
    let result = cloneNumberList.filter((x) => x === assign);
    result.shift();
    return result;
}

console.log(findAllNumbersV2([1, 1, 4, 3, 5, 4]));
console.log(findAllNumbers([1, 2, 5]));