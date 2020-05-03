//
// Object Destructuring
//

// const person = {
// 	name: "Nick",
// 	age: 26,
// 	location: {
// 		city: "Dallas",
// 		temp: 80,
// 	},
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: "ego is the enemy",
// 	author: "Ryan Holidy",
// 	publisher: {
// 		name: "Penguin",
// 	},
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ["1299 S Juniper Street", "Dallas", "Texas", "19475"];

const [, city, state = "California"] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "2.75"];

const [coffee, , , lPrice] = item;

console.log(`A Large ${coffee} costs ${lPrice}`);
