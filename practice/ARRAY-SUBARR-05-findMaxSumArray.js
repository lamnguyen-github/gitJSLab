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

    return resultArr;
}

function countMaxArray(numberList) {
    let cloneArrayBig = [...findMaxSumArray(numberList)];
    let result = 0;
    let mid = 0;
    for (let i = 0; i < cloneArrayBig.length; i++) {
        mid = cloneArrayBig[i].reduce((previous, currentValue) => previous + currentValue, 0);
        if (result < mid) result = mid;
    }
    return result;
}

console.log(countMaxArray([10, 20, 30, 0, 10, 20]));