function calcAvgOfAllEvenNumbers(numberList) {
    // your code here
    if (
        numberList.length === 0 ||
        !Array.isArray(numberList)
    )
        return 0;


    let count = 0;
    let assign = 0;
    let arr = [...numberList];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            count++;
            assign += element;
        }
    });
    if (count === 0) return 0;;
    return Math.round(assign / count);
}
let arr = [1];
console.log(calcAvgOfAllEvenNumbers(arr));
// console.log(arr.includes(NaN));