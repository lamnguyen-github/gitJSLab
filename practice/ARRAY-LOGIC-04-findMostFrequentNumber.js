function findMostFrequentNumber(numberList) {
    let cloneNumberList = [...numberList];
    let result = 0;
    let flag = 0;
    let cloneObj = cloneNumberList.reduce((obj, key) => {
        const element = (obj[key] || 0) + 1;
        obj[key] = element;
        return obj;
    }, {});
    for (const key in cloneObj) {
        if (flag < cloneObj[key]) {
            flag = cloneObj[key];
            result = key;
        }
    }
    console.log(cloneObj);
    return result;
}
console.log(findMostFrequentNumber([1, 3, 2, 3, 4]));