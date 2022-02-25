export const isPrime = (n) => {
    if (typeof n !== 'number' || n < 0 || n > 100000) return false;

    for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) return false;
    }
    console.log(typeof n);
    return true;
};
console.log(isPrime(3));