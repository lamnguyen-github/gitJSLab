function findAllPositiveEvenSubArr(numberList) {
    let cloneNumberList = [...numberList];
    let result = [];
    let subArr = [];
    for (let i = 0; i < cloneNumberList.length; i++) {
        const number = cloneNumberList[i];

        if (number % 2 === 0) subArr.push(number);
        const needToReset = number % 2 === 1 || i === numberList.length - 1;
        if (subArr.length > 0 && needToReset) {
            result.push(subArr);
            subArr = [];
        }
    }
    return result;
}
console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));