function findSumPair(numberList, targetSum) {
    let result = [];
    for (let i = 0; i < numberList.length; i++) {
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[i] + numberList[j] === targetSum) {
                result.push(numberList[i]);
                result.push(numberList[j]);
            }
        }
    }
    return result.sort((a, b) => a - b);
}
console.log(findSumPair([3, 2, 1], 5));