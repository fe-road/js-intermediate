// Filter
const randomNumbers = [4, 8, 5, 65, 43, 12, 7, 99];

const bigNumbers = randomNumbers.filter((item) => item >= 10);

// console.log(bigNumbers);

// Map
const people = [
    { name: 'Phellipe', age: 30, gender: 'M' },
    { name: 'Ana', age: 26, gender: 'F' },
    { name: 'Paul', age: 34, gender: 'M' },
];

const names = people.map((item) => item.name);
// console.log(names);

const converted = people.filter((item) => item.age >= 30).map((item) => ({
    name: item.name,
    gender: item.gender,
}));
// console.log(converted);

// Find
const me = people.find((item) => item.name === 'Phellipe');
// console.log(me);

const anaIndex = people.findIndex((item) => item.name === 'Ana2');
// console.log(anaIndex);

// Some
const phellipeExists = people.some((item) => item.name === 'Phellipe' && item.age < 30);
// console.log(phellipeExists);

// Reduce
const ageSum = people.reduce((accumulator, item) => item.age + accumulator, 0);
console.log(ageSum);
