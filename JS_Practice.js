
//Above Excercises were only variable declaration, aritmetic operations,Escape Sequences and other simple stuff

//Constructing Strings with Variables
var myName="Hani Raza";
var myStr="My name is " +myName+ " and I am well!";

//Appending Variables to Strings
var someAdjective="fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

//Understand String Immutability
var myStr = "Jello World";
myStr = "Hello World";

//Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

//Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace"
var lastLetterOfLastName = lastName[lastName.length-1];

//Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

//Store Multiple Values in one Variable using JavaScript Arrays
var sandwich = ["peanut butter", "jelly", "bread",5]
var sandwich1 = [["Bulls", 23], ["White Sox", 45]]

//Access Array Data with Indexes
var array = [50,60,70];
var data = array[1];  // equals 60

//Access Multi-Dimensional Arrays With Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]];

arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

//Manipulate Arrays With push()
var arr1 = [1,2,3];
arr1.push(4);  // arr1 is now [1,2,3,4]

//Manipulate Arrays With pop()
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]


//Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

//Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // myArray = [["dog", 3]];
myArray.unshift( ["Paul",35]); //myArray = [["Paul",35], ["dog", 3]];

//Write Reusable JavaScript with Functions
function reusableFunction () {
    console.log("Hi World");
}

reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs (param1, param2) {
    var res=param1+param2
    console.log(res);
}
functionWithArgs(5,7);

//Global Scope and Functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;

}

var myGlobal = 10;

function fun1() {
  oopsGlobal=5

}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun2();

//Local Scope and Functions
function myLocalScope() {

    // Only change code below this line
    var myVar = 10
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
  
//console.log('outside myLocalScope', myVar);

//Return a Value from a Function with Return
function timesFive(num) {
    return num *5;
}
var answer = timesFive(5);

//Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift()
    return item;
}
  
var testArr = [1,2,3,4,5];
  
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Switch,Case,Default
function switchOfStuff(val) {
    var answer = "";
    
    switch (val) {
    case "a":
      answer="apple";
      break;
    case "b":
      answer="bird";
      break;
    case "c":
      answer="cat";
      break;
    default:
      answer="stuff";
      break;
    }
  
    return answer;
}
  
switchOfStuff(1);

//Return Early Pattern for Functions

function abTest(a, b) {

    if(a<0 || b<0){
      return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

//Build JavaScript Objects
var myDog = {
    "name": "Shepherd",
    "legs": 4,
    "tails": 1,
    "friends": ["Meat", "Dogs"]
};

//Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
  
var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"];   

//Updating Object Properties
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["name"]="Happy Coder";

//Add New Properties to a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog["bark"]="Bhaow";

//Delete Properties from a JavaScript Object
delete myDog.bark;

//Testing Objects for Properties
var myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

//Manipulating Complex Objects
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "A",
      "title": "B",
      "release_year": 1974,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
];

//Accessing Nested Objects
var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

//Accessing Nested Arrays
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
  
var secondTree = myPlants[1].list[1]; //pine

//Recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    }

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}


//Profile LookUp
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

    var number = -1;
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName==name){
            number=i;
            break;
        }
    }
    var result;
    if(number==-1){
        result="No such contact";
        return result;
    }

    var item=contacts[number];
    var value="No such property";
    if(item.hasOwnProperty(prop)){
        value=item[prop];
    }
    return value;
}

lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript
var number=Math.random();
console.log(number);

//Generate Random Whole Numbers within a Range
//Math.floor(Math.random() * (max - min + 1)) + min

//ParseInt
var a = parseInt("007");

//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

//Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num > 0) ? "positive" 
    : (num < 0) ? "negative" 
    : "zero";
}

checkSign(10);

//Range of Numbers using recusrison
function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum ){
      return [];
    }
    if(startNum==endNum ){
      return [startNum];
    }
    
    var arr = rangeOfNumbers(startNum+1,endNum);
    arr.unshift(startNum);
    return arr;
    
  };

  //ES6: Compare Scopes of the var and let Keywords
  function checkScope() {
    var i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope();

//constant word

//Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //Use Arrow Functions to Write Concise Anonymous Functions
  
  //var magic = function() {
  //  return new Date();
  //};

  //Write Arrow Functions with Parameters
const myConcat = (a1, a2) => a1.concat(a2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Use the Rest Parameter with Function Parameters
const sum1 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

//Use the Spread Operator to Evaluate Arrays In-Place
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

const arr11 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr11); // returns 89

const arr2 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;
arr3 = [...arr2];  // Change this line
console.log(arr3);

//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};  
const { today, tomorrow } = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST1 = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST1;

//se Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  
  const [a,b,...arr] = list; // Change this line
  console.log(arr)
  return arr;
}
const arr = removeFirstTwo(source);

//Create Strings using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const getMousePosition = (x, y) => ({ x, y });

//Write Concise Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to Control Access to an Object
class Thermostat{
  constructor(fahrenheit){
      this.fahrenheit=fahrenheit;
  }
  get temperature(){
      return (5/9)*(this.fahrenheit-32);
  }

  set temperature(celsius){
      this.fahrenheit=(celsius*9)/5+32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Use export to Share a Code Block
const add = (x, y) => {
  return x + y;
}

export { add };
//export { add, subtract };

//Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

//Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Create a JavaScript Promise
const myPromise = new Promise((resolve, reject) => {
  if(a==b) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

//Handle a Fulfilled/Rejected Promise
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

//Regular Expressions: Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result)

//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
console.log(result)

//Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex);  // returns all vowels

//Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex); // Matches all except vowels and numbers

//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

//Match Characters that Occur Zero or More Timeslet soccerWord = "gooooooooal!";
let soccerWord= "gooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
goPhrase.match(goRegex); // Returns null

//Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // Returns false

//Match Ending String Patterns
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false

//Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/; 
let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything Except Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

//Match All Numberslet movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);

//Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/; // Change this line
let result = sample.match(countNonWhiteSpace);

//Specify Upper and Lower Number of Matches
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

//For lower {3,}

//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Exactly 4 m's
let result = timRegex.test(timStr);

//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // u should be here after q
let qRegex = /q(?!u)/; // u should not be here after q
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

//Check For Mixed Grouping of Characters
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // Returns true

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/gi; 
let result = myRegex.test(myString);  

//Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3,4);
console.log(arr); //[ 4, 5, 1]

// Add Items Using splice()
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);// returns [ 10, 11, 12, 13, 14, 15 ]

//Copy Array Items Using slice()
function forecast(arr) {

  var newArr = arr.slice(2,4);
  return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // returns [ 'warm', 'sunny' ]

//Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2)); // [ [ true, false, true ], [ true, false, true ] ]

//Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  sentence=['learning',...fragment,'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

//Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {

  if(arr.indexOf(elem)>=0){
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Create complex multi-dimensional arrays
let myNestedArray = [
  // Only change code below this line
  'level 1', //myNestedArray[0]
  ['level 2'],	// myNestedArray[1][0]
  [['level 3','deep']],	// myNestedArray[2][0][0] 
  [[['level 4','deeper']]], // myNestedArray[3][0][0][0]
  [[[['level 5','deepest']]]] // myNestedArray[4][0][0][0]
];

//Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 29;
console.log(foods);

