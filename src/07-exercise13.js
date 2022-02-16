function getFullName(firstName, lastName) {
    // your code here
    let fName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`.trim();
    let lName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`.trim();


    return `${fName} ${lName}`;


}
console.log(getFullName('nguyen', 'Lam'));