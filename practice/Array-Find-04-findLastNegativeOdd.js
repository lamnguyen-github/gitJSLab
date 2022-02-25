function findLastNegativeOdd(numberList) {
    let result = 0;
    numberList.forEach((element) => {
        if (element < 0) result = element;
    });
    return numberList[numberList.lastIndexOf(result)];
}
console.log(findLastNegativeOdd([3, -3, -1, -5, 1]));