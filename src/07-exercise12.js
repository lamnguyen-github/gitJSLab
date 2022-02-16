function findSecret(code) {
    // your code here
    if (code.length < 0) return '';

    for (let i = code.length; i >= 0; i--) {
        if (code[i] >= 'A' && code[i] <= 'Z') {
            code = code.replace(code[i], '');
        }
    }
    return code;
}
console.log(findSecret('SUPERhelloCODE'));