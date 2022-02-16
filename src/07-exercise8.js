// using if...else
function formatSecondsV1(seconds) {
    // your code here
    if (seconds < 0 || seconds > 60) return -1;

    if (seconds.toString().length < 2) return `0${seconds}`;
    return seconds.toString();
}

// using slice()
function formatSecondsV2(seconds) {
    if (seconds < 0 || seconds > 60) return -1;

    let text = `0${seconds.toString()}`;
    let result = text.slice(1, 3);
    return text.length < 3 ? text.toString() : result.toString();
}
console.log(formatSecondsV1(1));
console.log(formatSecondsV2(1));