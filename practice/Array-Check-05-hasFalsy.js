function hasFalsy(arr) {
    let flag = true;
    [...arr].forEach(x => {
        if (typeof x === 'boolean' && x === false) flag = false;
        if (typeof x === 'number' && (x === 0 || x !== NaN)) flag = false;
        if (typeof x === 'string' && x === '') flag = false;
        if (x === null || x === undefined) flag = false;
    });
    return flag;
}
console.log(hasFalsy([true, 123]));