function isSymmetricNumber(n) {
    let numberTenths = Math.trunc((n % 100) / 10);
    let numberUnitPart = n % 10;
    let numberPercent = Math.trunc(n / 100);
    if (n.toString().length > 3 || n < 0 || typeof n !== 'number') return false;

    if (n.toString().length === 1) return true;
    if (n.toString().length === 2) return numberUnitPart === numberTenths;
    if (n.toString().length === 3) return numberPercent === numberUnitPart;
}
console.log(isSymmetricNumber(33));