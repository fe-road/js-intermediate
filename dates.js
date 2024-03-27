const now = new Date();
console.log(now);

const nextYear = new Date();
nextYear.setFullYear(2025);
console.log(nextYear);
console.log(nextYear.getMonth());

console.log('Time: ', now.getTime());

if (now.getTime() < nextYear.getTime()) {
    console.log('now is before nextYear');
}

const difference = nextYear.getTime() - now.getTime();
console.log(difference);
console.log('Amount of days of difference: ', difference / (1000 * 60 * 60 * 24));

console.log(new Date('2024-03-25'));
console.log(new Date(1711575100865));