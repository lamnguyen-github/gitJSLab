function findProductByCode(productList, code) {
    let result = -1;
    for (let i in productList) {
        if (productList[i].code === code) result = i;
    }
    return result;
}
const productList = [
    { id: 1, code: 'ip01', name: 'IPhone 16' },
    { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

console.log(findProductByCode(productList, 'ip02'));