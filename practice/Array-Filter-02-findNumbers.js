function findNumbers(numberList) {
    let result = [];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i + 1] > numberList[i]) result.push(numberList[i + 1]);
    }
    return result;
}
console.log(findNumbers([2, 5, 3, 7]));