function removeDuplicatedNumbers(numberList) {
    let cloneNumberList = [...numberList];
    const objNumberList = cloneNumberList.reduce((obj, currentNumber) => {
        const element = (obj[currentNumber] || 0) + 1;
        obj[currentNumber] = element;
        return obj;
    }, {});

    const KeyValueArr = Object.entries(objNumberList);
    const result = [];
    KeyValueArr.forEach(([key, value]) => {
        if (value === 1) result.push(Number.parseFloat(key));
    });
    return result;
}
console.log(removeDuplicatedNumbers([1, 1, 1, 1, 1, 2, 3, 2]));