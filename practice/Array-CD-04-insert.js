function insert(numberList, newNumber) {
    numberList.push(newNumber);
    return numberList.sort((a, b) => a - b);
}
console.log(insert([1, 2, 4], 3));