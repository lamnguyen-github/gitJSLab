function isSubArray(a, b) {
    let count = 0;
    let sizeA = 0;
    let sizeB = 0;
    if (a.length === 0) return true;

    if (a.length > b.length) return false;
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] === b[i]) {
                console.log(b[i]);
                sizeA++;
                console.log(sizeA);
            } else {
                break;
            }
            sizeB++;
            console.log(sizeB);
            if (sizeA === sizeB) count++;
        }
    }
    if (count === a.length) return true;
    return false;
}

function isSubArrayV2(a, b) {
    var parStr = JSON.stringify(b);
    var childStr = JSON.stringify(a).replace('[', '').replace(']', '');
    return parStr.indexOf(childStr) !== -1;
}

function isSubArrayV3(a, b) {
    var parStr = b.join('');
    var childStr = a.join('');
    return parStr.indexOf(childStr) !== -1;
}
console.log(isSubArrayV2([2, 4], [1, 6, 2, 4, 5, 3]));