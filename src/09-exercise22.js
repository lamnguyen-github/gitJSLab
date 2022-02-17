const isPerfectNumber = (number) => {
    if (number > 1000 || number <= 5) return false;

    let result = 0;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            result += i;
        }
    }
    return result === number;
};

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (!isPerfectNumber(numberList[i])) {
            return false;
        }
    }
    return true;
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let assign = 0;
    const result = numberList.reduce((_, number) => {
        if (isPerfectNumber(number)) assign += 1;
        return assign;
    }, 0);
    console.log(result);
    return result === numberList.length;
}

// every
function isAllPerfectNumbersV3(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    return numberList.every((num) => isPerfectNumber(num));
    // isPerfectNumber(num));
}
let arr = [6, 6, 6, 6];
console.log(isAllPerfectNumbersV2(arr));