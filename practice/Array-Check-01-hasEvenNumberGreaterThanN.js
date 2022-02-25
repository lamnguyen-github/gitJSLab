function hasEvenNumberGreaterThanN(numberList, n) {
    let arr = [...numberList];
    let result = false;
    arr.find((ele) => {
        if (ele % 2 === 0 && ele > n) {
            console.log(ele);
            result = true;
        }
    });
    return false;
}
console.log(hasEvenNumberGreaterThanN([2, 8, 4, 6], 5));