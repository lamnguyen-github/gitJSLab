function findAllProducts(productList) {
    return productList.filter((x) => x.isFreeShip === true);
}
const productList = [
    { id: 1, name: 'iphone X', isFreeShip: true },
    { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];
console.log(findAllProducts(productList));