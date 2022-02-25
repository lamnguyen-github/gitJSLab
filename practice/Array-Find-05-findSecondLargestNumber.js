function findSecondLargestNumber(numberList) {
    let numberBig = 0;
    let numberBig2 = 0;
    numberList.forEach((element) => {
        if (numberBig < element) numberBig = element;
    });

    for (let i = 0; i < numberList.length; i++) {
        if (numberBig === numberList[i]) {
            continue;
        } else if (numberList[i] > numberBig2) {
            numberBig2 = numberList[i];
        }
    }
    return numberBig2;
}

function findSecondLargestNumberV2(numberList) {
    numberList.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        if (a < b) return 1;
        if (a > b) return -1;
    });
    const result = new Set(numberList);
    return Array.from(result)[1];
}
console.log(findSecondLargestNumberV2([1, 2, 4, 5, 5, 5]));