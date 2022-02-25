function findMinPositive(numberList) {
    let flag = numberList[0];
    numberList.forEach((x) => {
        if (flag > x) flag = x;
    });
    return flag;
}
console.log(findMinPositive([2, 6]));