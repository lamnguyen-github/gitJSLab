const protocol = ['http', 'https', 'wss', 'ws'];
const domain = ['com', 'vn', 'com.vn'];

const countURLs = (str) => {
    let result = 0;

    let checkProtocol = false;
    //check Protocol

    let arrSplit = str.split(' ').filter((x) => x.includes('://'));

    arrSplit.forEach((element) => {

        let assignArr = element.split('://');
        if (element.includes(protocol.find((x) => assignArr[0] === x))) checkProtocol = true;
        if (checkProtocol) {
            let domainArr = assignArr[1].split('.');
            if (domainArr[0].length > 3 && element.includes(domain.find((x) => domainArr[1] === x)))
                result++;
        }
        checkProtocol = false;
    });

    return result;
};

function isUrlTrue(str, pro, domain, path) {
    if (str[0] === pro && str[1] === domain || path[2] === path) return true;
    return false;
}

function isStartUrl(str) {
    protocol.forEach((element) => str === element);
}

function isDomain(str) {
    domain.forEach((element) => str.includes(element));
}

function isLengthDomain(str) {
    return str.length > 3;
}

console.log(
    countURLs(
        'my website is: https://esszs.com you can visit it https://esszs.com https://esszs.com '
    )
);