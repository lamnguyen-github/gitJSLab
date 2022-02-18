export const isDecreasingNumber = (n) => {
    if (n < 0 || n > 1000000 || typeof n !== 'number') return false;

    let assign = '' + n;
    let splitAssign = assign.split('');
    for (let i = 0; i < splitAssign.length - 1; i++) {
        if (splitAssign[i] - splitAssign[i + 1] !== 1) return false;
    }
    return true;
};
let number = 321;
console.log(isDecreasingNumber(number));