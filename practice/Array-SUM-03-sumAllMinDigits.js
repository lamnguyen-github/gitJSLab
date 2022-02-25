function sumAllMinDigits(numberList) {
    let result = 0;
    numberList.forEach((element) => {
        let assign = element.toString().split('');
        let min = Number.parseInt(assign[0]);
        assign.forEach((ele) => {
            if (min > Number.parseInt(ele)) {
                min = Number.parseInt(ele);
            }
        });
        result += min;
    });
    return result;
}
console.log(sumAllMinDigits([123, 532]));