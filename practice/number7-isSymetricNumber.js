const isSymetricNumber = (n) => {
    if (typeof n !== 'number' || (n < 1) | (n > 1000000)) return false;

    let remaining = n;
    let supportStart = 1;
    let count = 0;
    while (remaining > 10) {
        remaining = Number.parseInt(remaining / 10);
        supportStart = supportStart * 10;
        count++;
    }
    let supportEnd = 10;
    for (let i = 0; i < count / 2; i++) {
        let numberStart = Number.parseInt(n / supportStart) % 10;

        let numberEnd = n % supportEnd;
        while (numberEnd > 10) {
            numberEnd = Number.parseInt(numberEnd / 10);
        }
        if (numberStart !== numberEnd) return false;
        supportEnd = supportEnd * 10;
        supportStart = supportStart / 10;
    }

    return true;
};
console.log(isSymetricNumber(123321));