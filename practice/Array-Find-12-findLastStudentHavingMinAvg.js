function findLastStudentHavingMinAvg(studentList) {
    let result = new Object();
    let flag = avgScore(studentList[0]);
    studentList.forEach((x) => {
        if (flag >= avgScore(x)) {
            flag = avgScore(x);
            result = x;
        }
    });
    return result;
}

function avgScore(element) {
    return (element.math + element.english) / 2;
}
const studentList = [
    { id: 1, name: 'Alice', math: 9, english: 9 },
    { id: 2, name: 'Bob', math: 5, english: 5 },
    { id: 3, name: 'John', math: 5, english: 5 },
];

console.log(findLastStudentHavingMinAvg(studentList));