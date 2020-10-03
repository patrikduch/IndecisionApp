const x = require("uniqid");

function squareFunction () {
    return x*x;
}

const square = x => {
    console.log(x*x);
};

square(2);


const getFirstName = (fullName) => {

    return fullName.split(' ')[0];
}


console.log(getFirstName('Patrik Duch'));