function greet() {
    console.log('Hello World');
}

function sayHello(callback) {
    callback();
}

sayHello(greet);

function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const twice = multiplier(2);
console.log(twice(10));