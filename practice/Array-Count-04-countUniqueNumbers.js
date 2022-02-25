function countUniqueNumbers(numberList) {
    let count = 1;
    let cloneArr = Array.from(new Set(numberList));
    for (let i = 0; i < cloneArr.length; i++) {
        for (let j = i + 1; j < cloneArr.length; j++) {
            if (cloneArr[i] !== cloneArr[j]) {
                count++;
            }
        }
        break;
    }
    return count;
}
console.log(countUniqueNumbers([1, 2, 2, 3, 1]));