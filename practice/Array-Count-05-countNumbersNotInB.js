function countNumbersNotInB(a, b) {
    let count = 0;
    a.forEach((element) => {
        if (!b.includes(element)) count++;
    });
    return count;
}
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));