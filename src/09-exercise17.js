// Using loop from 2 to n - 1
function isPrimeV1(n) {
    // your code here
    if (n <= 0 || n > 1000 || n < 2) return false;

    for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// Using loop from 2 to square root of n
function isPrimeV2(n) {
    // your code here
    if (n <= 0 || n > 1000 || n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeV2(4));