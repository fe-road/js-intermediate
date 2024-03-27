let str = 'Hello World!';

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

console.log('1. Hello '.concat('World'));

console.log(str.charAt(4));
console.log(str.toLowerCase().includes('hello'));
console.log(str.indexOf('bananas'));

console.log('       2.  Hello    World   '.trim());
console.log('Hello World World'.replace('World', 'Phellipe'));
console.log('Hello World World'.replaceAll('World', 'Phellipe'));

console.log(str.substring(0, 6));
console.log(str.slice(0, 6));

// splice

console.log(str.length);