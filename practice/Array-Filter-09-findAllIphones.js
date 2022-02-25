function findAllIphone(productList) {
    return productList.filter((x) => {
        let assign = x.name.toLowerCase();
        return assign.includes('iphone') && x.amount > 0;
    });
}
const productList = [
    { id: 1, name: 'Luxury IPhone X', amount: 1 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 2 },
];
console.log(findAllIphone(productList));