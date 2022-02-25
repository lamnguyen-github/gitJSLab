function hasFibonacciNumber(numberList) {
    let arrClone = [...numberList];

    return arrFibonacciNumber().includes(arrClone);
}

function arrFibonacciNumber() {
    let arrFibonacci = [];
    for (let i = 0; i <= 20; i++) {
        arrFibonacci.push(fibonacciNumber(i));
    }
    return arrFibonacci;
}

function fibonacciNumber(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}
console.log(hasFibonacciNumber([89]));
console.log(arrFibonacciNumber())