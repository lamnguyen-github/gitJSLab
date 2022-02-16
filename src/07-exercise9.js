// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
    // your code here
    if (seconds < 0 || seconds > 86400) return -1;

    let ss = `0${seconds % SECONDS_PER_MIN}`;
    let mm = `0${Math.floor((seconds % 3600) / SECONDS_PER_MIN)}`;
    let hh = `0${Math.floor(seconds / SECONDS_PER_HOUR)}`;
    if (ss.length > 2) ss = ss.slice(1, 3);
    if (mm.length > 2) mm = mm.slice(1, 3);
    if (hh.length > 2) hh = hh.slice(1, 3);
    return `${hh}:${mm}:${ss}`;
}
console.log(formatTime(20020));