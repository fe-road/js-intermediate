const me = {
    name: 'Phellipe',
    age: 30,
    gender: 'M',
};

// const { name: phellipeName, age = 20, another = 'default' } = me;

// console.log(phellipeName);
// console.log(age);
// console.log(another);

const greet = ({ name, age }) => {
    console.log(`Hi, my name is ${name}, I'm ${age} years old.`);
};

greet(me);