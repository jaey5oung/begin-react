function doubleNumbers(arr) {
  // your code here
  const number = arr.map((n) => n * 2);
  return number;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr) {
  // your code here
  const numberString = arr.map(String);
  return numberString;
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function namesOnly(arr) {
  // your code here
  const named = arr.map((n) => n.name);
  return named;
}
console.log(
  namesOnly([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr) {
  // your code here
  const ageAnd = arr.map((arr) => {
    if (arr.age >= 17) {
      console.log(arr.name + ' can go to The Matrix');
    } else {
      console.log(arr.name + 'is under age');
    }
  });
}
console.log(
  makeStrings([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
