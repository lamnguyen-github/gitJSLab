const statisticsCharacters = (str) => {
    let arrSplit = str.split('');
    let count = 0;
    let obj = new Object();
    for (let i of arrSplit) {
        for (let j of arrSplit) {
            if (i === j) count++;
        }
        if (i === ' ') i = 'space';
        obj[i] = count;
        count = 0;
    }
    return obj;
};
console.log(statisticsCharacters('aa b cc '));