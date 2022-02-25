function findStudentById(studentList, studentId) {
    let result = -1;
    for (let i = 0; i < studentList.length; i++) {
        for (const key in studentList[i]) {
            if (studentList[i][key] === studentId) result = i;
        }
    }
    return result;
}
const studentList = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Frontend' },
];

console.log(findStudentById(studentList, 3));