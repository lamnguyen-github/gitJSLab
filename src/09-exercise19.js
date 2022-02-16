function isPerfectNumber(n) {
    // your code here
    if (n > 1000 || n <= 5) return false;

    let assign = 0;
    for (let i = 0; i < n - 1; i++) {
        if (n % i == 0) assign += i;
    }
    return assign === n ? true : false;
}
console.log(isPerfectNumber(5));