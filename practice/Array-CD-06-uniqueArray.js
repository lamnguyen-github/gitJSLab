function uniqueArray(numberList) {
    let cloneSet = new Set(numberList);
    return Array.from(cloneSet);
}

function uniqueArrayV2(numberList) {
    let result = numberList.filter((x, index) => {
        return numberList.indexOf(x) === index;
    });
    return result;
}

function uniqueArrayV3(numberList) {
    let count = 0;
    let result = [];
    for (let i = 0; i < numberList.length; i++) {
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[i] === numberList[j]) count++;
        }
        if (count === 0) result.push(numberList[i]);
        count = 0;
    }
    return result;
}
console.log(uniqueArrayV3([1, 1, 2, 3, 2]));