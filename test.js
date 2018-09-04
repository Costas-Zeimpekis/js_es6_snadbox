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

console.clear();

let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

let allComputers = computers.every(computer => computer > 16);
let someComputers = computers.some(computer => computer.ram > 16);

console.log('All Computers:', allComputers);
console.log('Some Computers:', someComputers);

console.clear();

let names = ['Costas', 'Eleni', 'Fan'];

let allMoreThan4 = names.every(name => name.length >= 4);
let someMoreThan4 = names.some(name => name.length >= 4);

console.log('Every:', allMoreThan4);
console.log('Some:', someMoreThan4);

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 10;
};

var username = new Field('2cool');
var password = new Field('my_password');
let birthdate = new Field('10/10/1980');

let fields = [username, password, birthdate];

let validateFiedls = fields.every(field => field.validate());

console.log('Every Validate:', validateFiedls);
console.clear();

let numbers4 = [10, 20, 30];

let sum4 = 1;

// for (let i = 0; i < numbers4.length; i++) {
//   sum4 += numbers4[i];
// }

sum4 = numbers4.reduce((sum, number) => {
  return sum + number;
}, sum4);

console.log(sum4);
console.clear();

let primaryColors = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }];

// let colors2 = primaryColor.map(color => color.color);

let colors2 = primaryColors.reduce((accumilator, color) => {
  accumilator.push(color.color);

  return accumilator;
}, []);

console.log(colors2);
console.clear();

let interview;

function balancedParens(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === ')') {
      return --previous;
    }

    if (char === '(') {
      return ++previous;
    }

    return previous;
  }, 0);
}

console.log(balancedParens(')(())('));
console.clear();
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(
  function(accumulator, desk) {
    if (desk.type === 'sitting') {
      ++accumulator.sitting;
      return accumulator;
    }
    if (desk.type === 'standing') {
      ++accumulator.standing;
      return accumulator;
    }
    return accumulator;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

var numbers5 = [1, 1, 2, 3];

function unique(array) {
  return array.reduce(function(acc, number) {
    if (acc.includes(number)) return acc;

    acc.push(number);
    return acc;
  }, []);
}

console.log('Uniques', unique(numbers5));
console.clear();

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary() {
    // var self = this;
    return this.members.map(
      function(member) {
        console.log(`${member} is in team ${this.teamName}`);
      }.bind(this)
    );
  }
};
team.teamSummary();
console.clear();

function createBookShop(invetory) {
  return {
    invetory,
    invetoryValue() {
      return this.invetory.reduce((acc, book) => acc + book.price, 0);
    },
    priceForTitle(title) {
      // let { price } = this.invetory.find(book => book.title === title);

      // return price;
      return this.invetory.find(book => book.title === title).price;
    }
  };
}

const invetory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Javascript', price: 20 }
];

const bookShop = createBookShop(invetory);

console.log(bookShop.invetoryValue());

console.log(bookShop.priceForTitle('Javascript'));

console.clear();

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5));

let myColors = ['red', 'blue'];
let eleniColors = ['red', 'green'];

// let familyColors = myColors.concat(eleniColors);

let familyColors = [...myColors, ...eleniColors];

console.log('My Colors', familyColors);
console.clear();

let expense = {
  type: 'Business',
  ammount: '$45 USD'
};

let { type, ammount } = expense;

console.log(`The type is ${type} and the ammount is ${ammount}`);
console.clear();

let newFiles = {
  extension: '.jpg',
  name: 'repost',
  size: 1400
};

function fileSummary({ extension, name, size }) {
  return `The file ${name}${extension} is ${size} bytes`;
}

console.log(fileSummary(newFiles));
console.clear();

let eteries = ['google', 'facebook', 'Uber'];

let [google, facebook, uber] = eteries;

console.log(google, facebook, uber);
console.clear();

const Google = {
  locations: ['Mount view', ['New York', 'boston'], 'London']
};

const {
  locations: [location1, [city1, city2]]
} = Google;

console.log(location1, city1, city2);
console.clear();

function signUp({ username, password, email, date, city = 'Thessaloniki' }) {
  console.log(city);
  // create new user
}

let userDe = {
  username: 'myname',
  password: 123214,
  email: 'bkkostas',
  date: '1/1/1',
  city: undefined
};

signUp(userDe);
console.clear();

const points = [[4, 5], [3, 2], [5, 6]];

let trelos = points.map(([x, y]) => {
  return { x, y };
});

console.log(trelos);
console.clear();

class Amaxi {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    console.log('Voom');
  }
}

class Toyota extends Amaxi {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    super.drive();
    console.log('Beep');
  }
}

const amaxara = new Toyota({ color: 'Red', title: 'parta' });

console.log(amaxara.title);
amaxara.drive();
amaxara.honk();

console.clear();
// For OF Loop
const hromata = ['red', 'blue', 'green'];

for (let hroma of hromata) {
  console.log(hroma);
}
console.clear();

// Generators

function* taxidia() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myTaxidia = [];
for (let taxidi of taxidia()) {
  myTaxidia.push(taxidi);
}

console.log(myTaxidia);

const engineerTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Costas',
  engineering: 'Dave'
};

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineering;
}

const names3 = [];

for (let name of teamIterator(engineerTeam)) {
  names3.push(name);
}

console.log(names3);
console.clear();
