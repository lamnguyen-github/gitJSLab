function findStudent(studentList) {
    let result = new Object();
    let count = 0;
    result = studentList.find((element) => {
        for (const i in element.marks) {
            if (element.marks[i] < 5) count++;
        }
        if (count === 1) return element;
        count = 0;
    });
    return result;
}
const studentList = [{
        id: 1,
        name: 'Alice',
        marks: { math: 9, english: 9, programming: 5 },
    },
    { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
    { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
    {
        id: 4,
        name: 'Sarah',
        marks: { math: 2, english: 8, programming: 10 },
    },
];
console.log(findStudent(studentList));
// { id: 3, name: 'John', ma