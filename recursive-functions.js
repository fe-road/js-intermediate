function calculateSumOfAllNumbers(number) {
    if (number <= 0) {
        return 0;
    }

    return number + calculateSumOfAllNumbers(number - 1);
}

function factorial(number) {
    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("Sum: ", calculateSumOfAllNumbers(5));
console.log("Sum: ", calculateSumOfAllNumbers(15));
console.log("Sum: ", calculateSumOfAllNumbers(90));
console.log("Factorial, ", factorial(5));
console.log("Factorial, ", factorial(15));