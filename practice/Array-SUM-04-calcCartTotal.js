function calcCartTotal(cartItemList) {
    let result = 0;
    cartItemList.forEach((element) => {
        result += element.product.price * element.quantity;
    });
    return result;
}
const cartItemList = [
    { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
    { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];
console.log(calcCartTotal(cartItemList));