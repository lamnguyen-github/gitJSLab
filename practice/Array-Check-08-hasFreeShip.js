function hasFreeShip(productList, price) {
    for (const key in productList) {
        let flag = productList[key];
        if (flag.isFreeShip === true && flag.price < price) {
            return true;
        }
    }
    return false;
}
const productList = [
    { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
    { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
];
console.log(hasFreeShip(productList, 10000000));