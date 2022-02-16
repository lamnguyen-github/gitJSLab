const isPerfectNumber = (number) => {
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            result += i;
        }
    }
    return result === number ? true : false;
};

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
    // your code here
    for (let i = 0; i < numberList.length; i++) {
        if (isPerfectNumber(numberList[i])) {
            return true;
        }
    }
    return false;
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
    // your code here
    const result = numberList.reduce((_, number) => {
        let assign = 0;
        if (isPerfectNumber(number)) assign += 1;
        return assign;
    }, 0);
    console.log(result);
    return result >= 1 ? true : false;
}

// every
function isAllPerfectNumbersV3(numberList) {
    // your code here

    return numberList.every((num) => isPerfectNumber(num));
    // isPerfectNumber(num));
}
let arr = [6, 6, 6, 6, 6];
console.log(isAllPerfectNumbersV3(arr));