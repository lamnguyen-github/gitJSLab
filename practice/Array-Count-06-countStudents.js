function countStudents(studentList, avgMark) {
    let avg = 0;
    let count = 0;
    let result = 0;
    studentList.forEach((element) => {
        let assign = 0;
        for (const key in element.marks) {
            assign += element.marks[key];
            count++;
        }
        avg = assign / count;
        if (avg >= avgMark) result++;
        count = 0;
    });
    return result;
}
const studentList = [
    { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
    { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
];
const studentList2 = [
    { id: 1, name: 'Alice', marks: { math: 8 } },
    { id: 2, name: 'Bob', marks: { math: 9 } },
];

console.log(countStudents(studentList2, 7));