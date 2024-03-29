// let myName = 'Phellipe';
// let anotherName = 'Paul';

// console.log('===');
// console.log(myName);
// console.log(anotherName);

// anotherName = myName;
// myName = 'Ana';

// console.log('===');
// console.log(myName);
// console.log(anotherName);

// let me = {
//     name: 'Phellipe',
// };
// let another = {
//     name: 'Paul',
// };

// console.log('===');
// console.log(me.name);
// console.log(another.name);

// another.name = me.name;
// me.name = 'Ana';

// console.log('===');
// console.log(me.name);
// console.log(another.name);

const me = {
    name: 'Phellipe',
};

const greet = (person) => {
    console.log(`Hello, ${person.name}`);
};

const addFullName = (person) => {
    // let anotherPerson = Object.assign({}, person);
    let anotherPerson = { ...person };
    anotherPerson.name += ' Perin';
};

addFullName(me);
greet(me);

let name = 'Phellipe';

const greetPrimitive = (name) => {
    console.log(`Hello, ${name}`);
};

const addFullNamePrimitive = (name) => {
    let copyName = name;
    copyName += ' Perin';
}

addFullNamePrimitive(name);
greetPrimitive(name);