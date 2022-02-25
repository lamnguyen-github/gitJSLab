function sumAllDigits(numberList) {
    let result = 0;
    numberList.forEach((element) => {
        let assign = element.toString().split('');
        assign.forEach((ele) => (result += Number.parseInt(ele)));
    });
    return result;
}
console.log(sumAllDigits([1234, 55]));