const timeout = setTimeout(() => {
    console.log('hey, timeout!');
}, 0);
console.log('hey from the outside');
clearTimeout(timeout);

// other code...

const interval = setInterval(() => {
    console.log('interval...');
}, 1000);

const timeoutOfInterval = setTimeout(() => {
    clearInterval(interval);
}, 6000);