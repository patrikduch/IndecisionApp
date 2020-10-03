var nameVar = 'Patrick';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Thomas';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block level  scoping
var fullName = 'Patrik Duch';

if (fullName) {
    const  firstName = fullName.split(' ')[0];
    console.log('Firstname: ' + firstName);
}


