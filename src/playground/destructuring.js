//Object Destructuring
// const person = {
//   name: 'Nick',
//   age: 26,
//   location: {
//     city: 'Columbia',
//     state: 'MO',
//     weather: 50
//   }
// };
// const { name: firstName = 'Anonymouse', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, state, weather: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}, ${state}`);
// }

// const book = {
//   title: 'A Song of Ice and Fire',
//   author: 'George RR Martin',
//   publisher: {
//     // name: "I don't know"
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);
//Array destructuring

const address = ['101 S 5th St', 'Suite 200', 'Columbia', 'MO', '65202'];

const [lineOne, lineTwo, city, state, zip] = address;
console.log(`The address is ${address}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [type, , cost] = item;
console.log(`A medium ${type} costs ${cost}`);
