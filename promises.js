const promise = new Promise((resolve, reject) => {
    const wasSuccessful = true;
    // do any fancy code (async!!)

    setTimeout(() => {
        if (wasSuccessful) {
            resolve('Success!');
        } else {
            reject('Ops, error!');
        }
    }, 2000);
});

console.log(promise);

promise.then((value) => {
    console.log(promise);
    console.log(value);
}).catch((error) => {
    console.log(promise);
    console.log(error);
}).finally(() => {
    console.log('finally!');
});

console.log(`I'm going to logged first!`);