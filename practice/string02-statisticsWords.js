const statisticsWords = (str) => {
    let arrSplit = str.split(' ');
    let count = 0;
    let obj = new Object();
    for (let i of arrSplit) {
        for (let j of arrSplit) {
            if (i === j) count++;
        }
        obj[i] = count;
        count = 0;
    }
    return obj;
};
console.log(statisticsWords('hello hello haha'))