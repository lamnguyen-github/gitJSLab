function isIncreasingNumberList(numberList) {
    if (numberList.length < 2) return false;
    const newLocal = [...numberList];
    for (let i = 0; i < newLocal.length - 1; i++) {
        if (newLocal[i] <= newLocal[i + 1]) return false;
    }
    return true;
}
console.log(isIncreasingNumberList([1, 1]));