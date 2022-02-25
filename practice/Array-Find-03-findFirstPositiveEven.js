function findFirstPositiveEven(numberList) {
    return numberList.find((x) => x % 2 === 0);

}
console.log(findFirstPositiveEven([1, 3, 5]))