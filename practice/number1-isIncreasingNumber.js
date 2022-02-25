export const isIncreasingNumber = (n) => {
    if (n < 0 || n > 1000000 || typeof n !== 'number') return false;

    let assign = '' + n;
    let splitAssign = assign.split('');
    for (let i = 0; i < splitAssign.length - 1; i++) {
        if (splitAssign[i + 1] - splitAssign[i] !== 1) return false;
    }
    return true;
};
let number = 1223;
console.log(isIncreasingNumber(number));