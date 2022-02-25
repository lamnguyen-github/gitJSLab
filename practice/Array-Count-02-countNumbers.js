function countNumbers(numberList) {
    let count = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i + 1] < numberList[i]) count++;
    }
    return count;
}
console.log(countNumbers([1, 2, 3, 10, 9, 8]));