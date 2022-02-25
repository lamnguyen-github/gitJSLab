function remove(arr, k, n) {
    if (k < 0 || k >= arr.length) return arr;
    if (k < arr.length) arr.splice(k, n);
    if (n === '') arr = [];
    return arr;
}
console.log(remove([1, 2, 3], 1, 2));