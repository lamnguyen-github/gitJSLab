function findLastPerfectSquare(numberList) {
    let result = 0;
    numberList.forEach((element) => {
        if (Math.sqrt(element) % 1 === 0) result = element;
    });
    return numberList[numberList.lastIndexOf(result)];
}
console.log(findLastPerfectSquare([4, 16, 25, 36, 40]));