function findAllNumbers(numberList) {
    let result = [];
    numberList.forEach((x) => {
        let flag = x;
        if (x < 10 && isOdd(x)) result.push(x);
        while (flag > 10) {
            flag = Math.trunc(flag / 10);
        }

        if (isOdd(flag)) result.push(x);
    });
    return result;
}

function isOdd(number) {
    if (number % 2 !== 0) return true;
    return false;
}
console.log(findAllNumbers([234, 421, 12]));