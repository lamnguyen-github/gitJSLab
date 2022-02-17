function cloneObject(obj) {
    if (typeof obj !== 'object') return null;

    let objResult = {};
    for (const key in obj) {
        objResult[key] = obj[key];
    }
    return objResult;
}

const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);
console.log(studentA === studentB);
console.log(studentB);
console.log(studentB.name);
console.log(studentB.math);
// console.log(cloneObject(studentA));