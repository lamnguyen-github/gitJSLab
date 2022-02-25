function sumEvenNumbers(numberList) {
    let result = 0;
    for (let i = 0; i < numberList.length; i++) {
        console.log(numberList[i] % 2 == 0);
        if (numberList[i] % 2 === 0 && numberList[i + 1] > numberList[i])
            result += numberList[i] + numberList[i + 1];
    }
    return result;
}

function sumEvenNumbersV2(numberList) {
    let result = numberList.reduce((previous, current, index) => {
        if (current % 2 === 0 && numberList[index + 1] % 2 === 0 && numberList[index + 1] > current) {
            previous += numberList[index + 1];
        }
        return previous;
    }, 0);
    return result;
}
console.log(sumEvenNumbersV2([-10, -4, 2, 8, 5]));
// console.log(sumEvenNumbersV2([2, 8, 5, 4]));
// error