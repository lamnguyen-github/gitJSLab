// const hasTwoDigitsWithSum = (n, sum) => {
//     let remaining = n;
//     let count = 0;
//     let support = 1;
//     let assign = 0;
//     while (remaining > 10) {
//         remaining = parseInt(remaining / 10);
//         support = support * 10;
//         count++;
//     }

//     for (let i = 0; i < count; i++) {
//         assign = parseInt(n / support) % 10;
//         console.log(assign);
//         for (let j = 0; j < count; j++) {
//             let numberSplit = parseInt(n / support) % 10;
//             console.log(numberSplit + '-');
//             if (assign + numberSplit === sum) return true;
//             support = support / 10;
//         }
//     }
//     return false;
// };
// console.log(hasTwoDigitsWithSum(1003, 4));

function vien(a, b) {
    let array = [];
    let helpA = a;
    while (helpA >= 10) {
        array.push(helpA % 10);
        helpA = parseInt(helpA / 10);
    }
    array.push(helpA);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i + j == b) {
                return true;
            }
        }
    }
    return false;
}

console.log(vien(123456789, 18));

