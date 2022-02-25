function generatePrimeNumbers(n) {
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) result.push(i);
    }
    return result;
}

function isPrime(n) {
    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(generatePrimeNumbers(10));