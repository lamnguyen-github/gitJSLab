function findMaxSumArray(numberList) {
    let resultArr = [];
    let subArr = [];
    let resultNumber = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < numberList[i + 1]) subArr.push(numberList[i]);

        const needCondition = numberList[i] > numberList[i + 1] || i === numberList.length - 1;
        if (numberList.length > 1 && needCondition) {
            subArr.push(numberList[i]);
            resultArr.push(subArr);
            subArr = [];
        }
    }
    let result = [];
    let flag = 0;
    let mid = 0;
    for (let i = 0; i < resultArr.length; i++) {
        mid = resultArr[i].reduce((previous, currentValue) => previous + currentValue, 0);
        if (flag < mid) {
            flag = mid;
            result = resultArr[i];
        }
    }
    return result;
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));