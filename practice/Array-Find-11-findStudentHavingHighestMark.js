function findStudentHavingHighestMark(studentList) {
    return studentList.find((x) => checkScoreBiggest(studentList) === x.math);
}

function checkScoreBiggest(studentList) {
    let flag = 0;
    studentList.forEach((x) => {
        if (flag < x.math) flag = x.math;
    });
    console.log(flag);
    return flag;
}
const studentList = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 10 },
    { id: 3, name: 'John', math: 10 },
];
console.log(findStudentHavingHighestMark(studentList));