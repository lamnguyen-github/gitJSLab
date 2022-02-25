function hasStudent(studentList, studentId) {
    for (const key in studentList) {
        if (studentList[key].id === studentId) return true;
    }
    return false;
}
const studentList = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Frontend' },
];
console.log(hasStudent(studentList, 1));