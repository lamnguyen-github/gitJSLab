const KEY_FORMAT = ['number', 'street', 'ward', 'district', 'city'];

function getDisplayedAddress(address) {
    if (typeof address !== 'object' || Object.keys(address).length === 0) return '';

    let valueAddress = [];
    KEY_FORMAT.forEach((element) => {
        if (element in address) valueAddress.push(address[element]);
    });
    return valueAddress.join(', ');
}
console.log(
    getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
        number: 123,
    })
);