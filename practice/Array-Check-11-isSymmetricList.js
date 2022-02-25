function isSymmetricList(numberList) {
    if (!Array.isArray(numberList) || numberList.length < 1) return false;
    let numberStart = '';
    let numberEnd = '';
    for (let i = 0; i < numberList.length / 2; i++) {
        numberStart += `${numberList[i]}`;
    }
    for (let j = numberList.length - 1; j >= numberList.length / 2; --j) {
        numberEnd += `${numberList[j]}`;
    }
    console.log(numberStart);
    console.log(numberEnd);
    if (numberEnd !== numberStart) return false;
    return true;
}
console.log(isSymmetricList([1, 2, 2, 1]));