function findFirstIPhone(productList) {
    return productList.find((x) => {
        let assign = x.name.toLowerCase();
        if (assign.includes('iphone')) return x;
    });
}
const productList = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'IPHONE X' },
    { id: 3, name: 'iPhone 12 Pro' },
];
console.log(findFirstIPhone(productList));