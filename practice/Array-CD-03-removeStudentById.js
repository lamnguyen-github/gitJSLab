function removeStudentById(studentList, studentId) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === studentId) {
            studentList.splice(i, 1);
        }
    }
    return studentList;
}
const studentList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
console.log(removeStudentById(studentList, 3));