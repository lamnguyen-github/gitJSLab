function findFirstEmail(strList) {
    let result = '';
    strList.forEach((element) => {
        let split = element.split(' ').filter((x) => x.includes('@'));
        split.forEach((x) => {
            let splitX = x.split('@');
            console.log(splitX);
            if (splitX[0].length >= 3 && splitX[1].length >= 3 && checkDomain(x)) {
                result = x;
            }
        });
    });
    return result;
}

function checkDomain(str) {
    const domain = ['.com', '.vn', '.com.vn'];
    let result = false;
    domain.forEach((element) => {
        if (element === str.slice(-element.length)) result = true;
    });
    return result;
}
console.log(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com']));