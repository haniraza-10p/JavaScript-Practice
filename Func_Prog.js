//Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (list,bookName) {

  var list1 = [...list]
  list1.push(bookName);
  return list1;
}

function remove (list,bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    var list1 = [...list];
    list1.splice(book_index, 1);
    return list1;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

//Use the map Method to Extract Data from an Array
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

//Use the filter Method to Extract Data from an Array
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  let res = anim.slice(beginSlice, endSlice);
  return res;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  var res = original.concat(attach)
  return res;
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

//Use the reduce Method to Analyze Data
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
  var result = arr.filter  (num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));
  return result;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  return arr.sort()
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Split a String into an Array Using the split Method
function splitify(str) {
  var res = str.split(/\W/);
  return res;
}
splitify("Hello World,I-am code");

var str = "Hello World";
var bySpace = str.split(" "); //["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); //["How", "are", "you", "today"]

//Combine an Array into a String Using the join Method
var arr = ["Hello", "World"];
var str = arr.join(" ");

function sentensify(str) {
  var res = str.split(/\W/)
  res = res.join(" ");
  
  return res;
}
sentensify("May-the-force-be-with-you");

//Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
// Only change code below this line
function urlSlug(title) {
  title=title.toLowerCase()
  title=title.trim()
  title=title.split(/\s+/)
  title=title.join("-");

  return title;
}
urlSlug(" Winter Is  Coming")

//Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
  return arr.every(function(value) {
    return value > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);

//Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  return arr.some(function(value) {
    return value > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);

//Introduction to Currying and Partial Application
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30);
