// alert('hello world!');

// const response = window.confirm('Are you sure you want to go to Google?');
// console.log(response);

// if (response) {
//     window.location.href = 'https://google.com';
// }

const params = new URLSearchParams(window.location.search);
console.log(params.get('search'));
console.log(params.has('page'));

params.set('pageSize', 10);
// window.location.search = params.toString();

window.sessionStorage.setItem('username', 'phellipeperin');
window.sessionStorage.removeItem('username');
window.localStorage.clear();

console.log(window.sessionStorage);
console.log(window.localStorage.getItem('login_token'));

