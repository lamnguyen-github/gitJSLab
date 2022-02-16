const isPrime = (n) => {
    if (n < 2 || typeof n !== 'number') return false;

    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
//  for...i
function hasPrimeV1(numberList) {
    // your code here
    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) return true;
    }
    return false;
}

//  forEach
function hasPrimeV2(numberList) {
    // your code here
    let result = false;
    numberList.forEach((value) => {
        if (isPrime(value)) result = true;
    });
    return result;
}

//  find
function hasPrimeV3(numberList) {
    // your code here
    const result = numberList.find((value) => isPrime(value));
    return result >= 2 ? true : false;
}

//  findIndex
function hasPrimeV4(numberList) {
    // your code here
    const result = numberList.findIndex((value) => isPrime(value));
    return result >= 0 ? true : false;
}

//  some
function hasPrimeV5(numberList) {
    // your code here
    const result = numberList.some((value) => isPrime(value));
    return result;
}
let arrNumber = [1, 1, 1, 6];
console.log(hasPrimeV5(arrNumber));