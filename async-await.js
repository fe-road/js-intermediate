const fetchData = async () => {
    try {
        // Fetches user
        const user = new Promise();
        // Fetches hobbies
        const hobbies = new Promise();
    } catch (error) {
        console.log(error);
    } finally {
        
    }

    return 'data';
};

const fetchDataViaPromises = () => {
    // Fetch user
    new Promise().then((user) => {

    }).catch((error) => {

    }).finally(() => {

    });
    // Fetch hobbies
    new Promise().then((hobbies) => {

    }).catch((error) => {

    }).finally(() => {

    });
};

// async function fetchData() {
//     return 'data';
// }

// function fetchData() {
//     return Promise.resolve('data');
// }

console.log(fetchData());