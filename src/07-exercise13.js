function getFullName(firstName, lastName) {
    // your code here

    if (firstName === undefined && lastName === undefined) return '';

    let fName = firstName;
    let lName = lastName;

    if (lastName === undefined || lastName === '') {
        fName.trim();
        return `${fName[0].toUpperCase()}${fName.slice(1).toLowerCase()}`;
    }

    if (firstName === undefined || firstName === '') {
        lName.trim();
        return `${lName[0].toUpperCase()}${lName.slice(1).toLowerCase()}`;
    }
    fName = fName.trim();
    lName = lName.trim();
    return `${fName[0].toUpperCase()}${fName.slice(1).toLowerCase()} ${lName[0].toUpperCase()}${lName
    .slice(1)
    .toLowerCase()}`;
}

console.log(getFullName());