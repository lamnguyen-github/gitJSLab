function hasAlice(studentList) {
    let flag = false;
    for (let stu in studentList) {
        if (isAlice(studentList[stu])) flag = true;
    }
    return flag;
}

function isAlice(student) {
    return student.gender === 'female' && student.name.toLowerCase() === 'alice';
}
const studentList = [
    { id: 1, name: 'Alice', gender: 'male' },
    { id: 2, name: '', gender: 'female' },
    { id: 3, name: 'Easy Frontend', gender: 'male' },
];
console.log(hasAlice(studentList));