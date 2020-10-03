const add = function(a,b) {
    console.log(arguments);
    console.log(a+b);
}

add(2,1);


// argument object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions
const user = {
    name: 'Patrik',
    cities: ['Ostrava', 'Cesky Tesin'],

    printCitiesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + city);
        });
    }
}


user.printCitiesLived();



// map - transforms each item
const multiplier =   {

    numbers: [1,2,4],
    multiplyBy: 2,

    multiply() {
        return this.numbers.map((number => {
            return number * this.multiplyBy
        }))
    }
}


console.log(multiplier.multiply());