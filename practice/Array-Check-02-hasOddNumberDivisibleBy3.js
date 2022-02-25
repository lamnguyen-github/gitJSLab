function hasOddNumberDivisibleBy3(numberList) {
    let result = [];
    [...numberList].forEach((ele) => {
        if (ele % 2 !== 0 && ele % 3 === 0) {
            result.push(ele);
        }
    });
    return result.length > 0 ? true : false;
}

function hasOddNumberDivisibleBy3V2(numberList) {
    let result = [...numberList].filter((x) => {
        return x % 3 === 0 && x % 2 !== 0;
    });

    return result.length > 0 ? true : false;
}
console.log(hasOddNumberDivisibleBy3([1, 3]));