export const isPerfectSquare = (n) => {
    if (typeof n !== 'number' || n < 0 || n > 100000) return false;

    if (Math.sqrt(n) % 1 === 0) return true;
    return false;
}