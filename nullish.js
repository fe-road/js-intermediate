const me = {
    name: 'Phellipe',
    lastName: '',
    isMarried: false,
};

const lastName = me.lastName || 'Perin';
console.log(lastName);

const anotherLastName = me.lastName ?? 'Perin';
console.log(anotherLastName);