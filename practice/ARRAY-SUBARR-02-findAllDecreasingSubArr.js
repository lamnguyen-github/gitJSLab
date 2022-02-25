function findAllDecreasingSubArr(numberList) {
    let cloneNumberList = [...numberList];
    let result = [];
    let index = 0;
    for (let i = 0; i < cloneNumberList.length; i++) {
        result[index] = new Array();
        for (let j = i; j < cloneNumberList.length; j++) {
            if (cloneNumberList[j] > cloneNumberList[j + 1]) {
                result[index].push(cloneNumberList[j]);
            } else {
                result[index].push(cloneNumberList[j]);
                i = j;
                index++;
                break;
            }
        }
    }
    return result.filter((x) => x.length > 2);
}
console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]));