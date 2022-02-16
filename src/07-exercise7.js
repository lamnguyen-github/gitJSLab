function removeVowel(str) {
    // your code here
    let result = str;
    let arrText = ['u', 'e', 'o', 'a', 'i'];
    for (let i = 0; i < arrText.length; i++) {
        if (str.includes(arrText[i])) {
            result = result.replace(arrText[i], '');
        }
    }
    return result.trim();
}
console.log(removeVowel('helloi'));