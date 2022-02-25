function countWords(wordList, n) {
    let count = 0;
    wordList.forEach((element) => {
        if (element.length >= n) count++;
    });
    return count;
}
console.log(countWords(['easy', 'frontend'], 5));
