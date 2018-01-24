console.log(process.env.NODE_ENV)
console.log(process.env.FIREBASE_AUTH_DOMAIN);
const promise = new Promise((res, err) => {
    setTimeout(() => {
        res('This is my resolved data');
        err('something went wrong')
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return 'some data';
}).then((str) => {
    console.log('does this run?', str);
}).catch((err) => {
    console.log('woops, something went wrong')
})

console.log('after');