function cloneObject(obj) {
    return Object.create(obj);
}

const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);
console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);
// console.log(cloneObject(studentA));