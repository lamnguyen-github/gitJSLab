// using split
function extractDomainV1(email) {
    // your code here
    if (email.length <= 0) return '';

    let result = email.split('@');
    return result[1];

}

// using indexOf() and slice()
function extractDomainV2(email) {
    // your code here
    if (email.length <= 0) return '';

    return email.slice(email.indexOf('@') + 1);

}
console.log(extractDomainV1('lamdilinh@gmail.co'));
console.log(extractDomainV2('lamdilinh.nguyen@gmail.com'));