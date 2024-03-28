'use strict';

// console.log(this);

function Person(name) {
    this.name = name;
    console.log("Person this: ", this);

    function greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    const greetArrow = () => {
        console.log(`Hello from Arrow, my name is ${this.name}`);
    }

    // greet();
    greetArrow();
}

const me = new Person('Phellipe Perin');

function sum(a, b) {
    const c = a + b;
    console.log(this);
    return c;
}

sum(1, 1);