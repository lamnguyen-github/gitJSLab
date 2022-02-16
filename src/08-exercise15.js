function isEqual(obj1, obj2) {
    let result = true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) result = false;

    for (let i = 0; i < obj1.length; i++) {
        if (obj1[i] !== obj2[i]) result = false;
    }
    return result;
}
