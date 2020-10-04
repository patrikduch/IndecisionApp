

class Person {
    constructor(firstName, lastName, age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return this.firstName;
    }

    getDescription() {

        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
}


class Student extends Person {
    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        return  super.getDescription() + '!';
    }
}



const patrikDuch = new Student('Patrik', 'Duch', 27, 'Computer Science');

console.log(patrikDuch.getDescription());