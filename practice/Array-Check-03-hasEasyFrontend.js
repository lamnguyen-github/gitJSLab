function hasEasyFrontend(wordList) {
    if (!Array.isArray(wordList) || wordList.length < 0) return false;

    const assign = 'easy frontend';
    let flag = wordList.join(' ');
    return flag.includes(assign) ? true : false;
}
console.log(hasEasyFrontend(['easy', 'frontend']));