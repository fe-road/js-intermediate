const checkNumber = (number) => {
    if (isNaN(number)) {
        throw new Error('Input should be a number!');
    }
}

try {
    checkNumber(5);
    console.log('number is correct!');
} catch (error) {
    console.log(error);
} finally {
    console.log('finally!');
}