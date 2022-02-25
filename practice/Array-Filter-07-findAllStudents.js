function findAllStudents(studentList) {
    return studentList.filter((element) => element.math < 5);
}
const studentList = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 4 },
    { id: 3, name: 'John', math: 0 },
];

console.log(findAllStudents(studentList));