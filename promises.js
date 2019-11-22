/**
 * this codeblock is an example of how to resolve multiple promises at once
 */
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});
//with one promise, we're just doing an example of the fetch api
const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => {
    res.json()
})
Promise.all([promise1, promise2, promise3, promise4]).then((val) => {
    console.log(val)
})