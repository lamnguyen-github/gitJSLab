function findMissingNumber(numberList, n) {
    let result = [];
    for (let i = numberList[0]; i < n; i++) {
        if (!numberList.includes(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(findMissingNumber([5, 6, 8, 9, 10], 10));