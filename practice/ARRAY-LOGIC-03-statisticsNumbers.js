function statisticsNumbers(numberList) {
    let cloneNumberList = [...numberList];
    let resultObj = cloneNumberList.reduce((obj, key) => {
        const element = (obj[key] || 0) + 1;
        obj[key] = element;
        return obj;
    }, {});
    return resultObj;
}
console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));