function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;

    let result = text.slice(0, maxLength - 1);
    return `${result}\u2026`;
}
console.log(truncate('hello', 2))