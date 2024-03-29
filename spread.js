const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2, 7, 8, 9, 10];
console.log(mergedArray);

const array3 = [7, 8, 9];
const copyArray3 = [...array3];
console.log(copyArray3);


const me = {
    name: 'Phellipe',
    lastName: 'Perin',
    age: 30,
    gender: 'M',
};
const anotherPerson = { ...me, age: 28 };
console.log(anotherPerson);

const { lastName, ...rest } = me;
console.log(rest);


const sum = (a, b, c) => {
    return a + b + c;
};
const numbers = [1, 3, 5];

console.log(sum(...numbers));

const sumAll = (...numberList) => {
    return numberList.reduce((accumulator, item) => {
        return item + accumulator;
    }, 0);
};

console.log(sumAll(1));
console.log(sumAll(1, 3));
console.log(sumAll(1, 3, 5, 7, 9, ...numbers));

// const myArray = [1, 2, 3];
// myArray.push()

