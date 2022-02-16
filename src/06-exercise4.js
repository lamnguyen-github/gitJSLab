function getMaxDigit(n) {
    let assign = 0;
    let numberTenths = (n % 100) / 10;
    let numberUnitPart = n % 10;
    let numberPercent = n / 100;
    if (n < 0 || typeof n !== 'number' || n.toString().length > 3) return -1;

    if (assign < numberTenths) assign = numberTenths.toFixed();
    if (assign < numberUnitPart) assign = numberUnitPart.toFixed();
    if (assign < numberPercent) assign = numberPercent.toFixed();
    return Number.parseInt(assign);

}
console.log(getMaxDigit(0));