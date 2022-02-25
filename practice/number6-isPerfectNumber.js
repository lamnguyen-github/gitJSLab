export const isPerfectNumber = (n) => {
    if (typeof n !== 'number' || n < 1 || n > 1000) return false;

    let assign = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) assign += i;
    }
    return assign === n;
};