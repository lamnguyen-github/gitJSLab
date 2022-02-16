// using indexOf()
function isSecureUrlV1(url) {
    // your code here
    if (url.indexOf('https') >= 0 || url.indexOf('wss') >= 0) return true;
    return false;
}

// using startsWith()
function isSecureUrlV2(url) {
    if (url.startsWith('https') || url.startsWith('wss')) return true;
    return false;
}
console.log(isSecureUrlV1('https.com.vn'))
console.log(isSecureUrlV2('https.com.vn'))