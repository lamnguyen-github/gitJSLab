function calcAvgOfAllEvenNumbers(numberList) {
    // your code here
    if (
        numberList.includes(NaN) === true ||
        numberList.length === 0 ||
        Array.isArray(numberList) === false ||
        (numberList.length === 1 && numberList[0] % 2 !== 0)
    )
        return 0;

    let result = 0;
    let count = 0;
    let assign = 0;
    let arr = [...numberList];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            count++;
            assign += element;
        }
        result = assign / count;
    });
    return result.toFixed();
}
let arr = [1, 2, 4, 8, NaN];
console.log(calcAvgOfAllEvenNumbers(arr));
console.log(arr.includes(NaN));