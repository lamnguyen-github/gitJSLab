function insert(arr, newItem, k) {
    if (k > arr.length) arr.push(newItem);
    if (k < 0) {
        arr.unshift(newItem);
    } else {
        arr.splice(k, 0, newItem);
    }
    return arr;
}
console.log(insert([1, 2, 3], 10, 1));