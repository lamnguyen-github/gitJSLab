function compareNumbers(a, b) {
    if (typeof a !== 'number' && b !== 'number' || a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;

}
console.log(compareNumbers(5, 4))