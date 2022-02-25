export const isDivisibleBy10 = (n) => {
    if (n < 0 || n > 1000000) return false;

    let remaining = n;
    let count = 0;
    let assign = 0;
    let support = 1;
    let result = 0;
    while (remaining > 10) {
        remaining = parseInt(remaining / 10);
        support = support * 10;
        count++;
    }
    for (let i = 0; i <= count; i++) {
        let numberCount = parseInt(n / support) % 10;
        support = support / 10;
        result += numberCount;
    }
    if (result % 10 === 0) return true;
    return false;
};