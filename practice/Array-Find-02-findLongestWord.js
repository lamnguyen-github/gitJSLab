function findLongestWord(wordList) {
    let cloneArr = [...wordList];

    let result = '';
    let flag = 0;
    cloneArr.forEach((x) => {
        if (x.includes(' ') || x.length > 5) return '';
        console.log(flag);
        if (flag < x.length) {
            result = x;
            flag = result.length;
        }
    });
    return result;
}
console.log(findLongestWord(['supe', 'cool', 'gagag']));