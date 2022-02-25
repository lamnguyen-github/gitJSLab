function countPositiveEvenNumbers(numberList) {
    let count = 0;
    numberList
        .filter((x) => x > 0)
        .forEach((element) => {
            if (element % 2 == 0) count++;
        });
    return count;
}
console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4]));