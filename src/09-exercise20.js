// using for...i
function transformNumbersV1(numberList) {
    let result = [];
    let assign = [...numberList];
    if (assign.length === 1) return assign;

    for (let i = 0; i < assign.length; i++) {
        if (i !== 0 && i !== assign.length - 1) result.push(assign[i - 1] + assign[i + 1]);
        if (i === assign.length - 1) result.push(assign[assign.length - 2]);
        if (i === 0) result.push(assign[1]);
    }
    return result;
}

// using forEach()
function transformNumbersV2(numberList) {
    let result = [];
    let assign = [...numberList];
    if (assign.length === 1) return assign;

    assign.forEach((_, index) => {
        if (index === 0) result.push(assign[1]);
        if (index === assign.length - 1) result.push(assign[assign.length - 2]);
        if (index !== 0 && index !== assign.length - 1)
            result.push(assign[index - 1] + assign[index + 1]);
    });
    return result;
}

// using map()
function transformNumbersV3(numberList) {
    let assign = [...numberList];
    if (assign.length === 1) return assign;

    const result = assign.map((value, index) => {
        if (index === 0) value = assign[1];
        if (index === assign.length - 1) value = assign[assign.length - 2];
        if (index !== 0 && index !== assign.length - 1) value = assign[index - 1] + assign[index + 1];
        return value;
    });
    return result;
}
console.log(transformNumbersV1([1]));
console.log(transformNumbersV2([2, 4, 6, 2]));
console.log(transformNumbersV3([2, 4, 6, 2]));