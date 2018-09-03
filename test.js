let people = ['Maria', 'Eleni', 'Costas'];

people.forEach((person, index, people) => {
  people[index] = person.concat(' Zeimpekis');
});

console.log(people);

console.clear();

let numbers1 = [1, 2, 3, 4];

let sum = 0;
numbers1.forEach(number => {
  sum += number;
});

console.log(sum);

function test() {}
console.clear();

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
  areas[images.indexOf(image)] = image.height * image.width;
});

console.log(areas);

console.clear();

const numbers2 = [1, 2, 3];
let doubleNumbers = [];

// doubleNumbers = numbers2.map(number => number * 2);

for (let i = 0; i < numbers2.length; i++) {
  doubleNumbers.push(numbers2[i] * 2);
}

console.log(doubleNumbers);

console.clear();

const cars = [
  { model: 'Focus', price: 'cheap' },
  { model: 'Modeo', price: 'average' },
  { model: 'Kuga', price: 'expensive' }
];

let prices = cars.map(car => car.price);

console.log(prices);
console.clear();

const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 10 },
  { name: 'orange', type: 'fruit', quantity: 2, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 20, price: 20 },
  { name: 'apple', type: 'fruit', quantity: 30, price: 9 }
];

var filter = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === 'vegetable') {
//     filter.push(products[i]);
//   }
// }

filter = products.filter(product => {
  return (
    product['type'] === 'vegetable' &&
    product['quantity'] > 5 &&
    product['price'] > 10
  );
});

console.log(filter);
console.clear();

const post = { id: 4, title: 'New Post' };

const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'awesome' },
  { postId: 4, content: 'post' }
];

let postComents = [];
function commentsForPost(post, comments) {
  postComents = comments.filter(comment => comment.postId === post.id);
}

commentsForPost(post, comments);

console.log(postComents);
console.clear();

var numbers3 = [10, 20, 30];

function iteration(number) {
  return number > 10;
}

function reject(array, iteratorFunction) {
  var filters = array.filter(iteratorFunction);
  return array.filter(function(element) {
    return !filters.includes(element);
  });
}

var less20 = reject(numbers3, iteration);
console.log(less20);

console.clear();

const users = [{ name: 'Costas' }, { name: 'Eleni' }, { name: 'Fani' }];

let user;

// for (let i = 0; i < users.length; i++) {
//   if (users[i].name === 'Eleni') {
//     user = users[i];
//     break;
//   }
// }

user = users.find(user => user.name === 'Costas');

console.log(user);
console.clear();

function Car(model) {
  this.model = model;
}

let cars1 = [new Car('Camaro'), new Car('Focus'), new Car('Modeo')];

let car1 = cars1.find(car => car.model === 'Focus');

console.log(cars1);
console.log(car1);
