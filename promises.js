// Promises

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => {
    console.log('Yeah baby');
  })
  .then(() => {
    console.log('I was also ran');
  })
  .catch(() => {
    console.log('Ohhhh!!!');
  });

console.clear();

let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
