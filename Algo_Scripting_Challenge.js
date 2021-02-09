//Sum All Numbers in a Range
function sumAll(arr) {
    var sum=0
    if(arr[0]<arr[1]){
      for(let i=arr[0];i<=arr[1];i++){
        sum+=i;
      }
    }
    else{
      for(let i=arr[1];i<=arr[0];i++){
        sum+=i;
      }
    }
    return sum;
  }
  
  sumAll([10, 5]);

//Diff Two Arrays
function diffArray(arr1, arr2) {
    var newArr = [];
  
    for(let i=0;i<arr1.length;i++){
      if (arr2.includes(arr1[i])){
        arr2 = remove(arr2,arr1[i])
      }
      else{
        newArr.push(arr1[i])
      } 
    }
  
    for(let i=0;i<arr2.length;i++){
      if(arr2[i]!=undefined){
        newArr.push(arr2[i])
      }
    }
    return newArr;
  }
  
  function remove(arr,val){ 
    for(let i=0;i<arr.length;i++){
      if(arr[i]==val){
        delete arr[i]; 
      }
    }
    return arr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Seek and Destroy
function destroyer(arr) {

    var values = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++)
      for (var j = 1; j < values.length; j++){
        if(arr[i]==values[j]){
          delete arr[i];
        }
      }
      arr =  arr.filter(Boolean);
  
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Wherefore art thou (What is in name):
function whatIsInAName(collection, source) {
    var arr = [];
  
    var sourceKeys = Object.keys(source);
  
   return collection.filter(function(obj) {
      return sourceKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//.split(/\s|_|(?=[A-Z])/) - Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  
    str = str.split(/\s|_|(?=[A-Z])/)
    str = str.join('-')
    str=str.toLowerCase()
    
    console.log(str)
    return str;
  }
  
  spinalCase('AllThe-small Things');

//Pig Latin - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it. 
//If a word begins with a vowel, just add "way" at the end.
function translatePigLatin(str) {
  
    var temp=[]
    let vowels=['a','e','i','o','u']
    str = str.split("")
  
    for(var i=0;i<str.length;i++){
      if(vowels.includes(str[i])){
        break;
      }
      temp.push(str[i])
      delete str[i]
    }
    str =  str.filter(Boolean);
  
    if(temp.length==0){
      str.push('way')
    }
    else{
      for(var i=0;i<temp.length;i++){
        str.push(temp[i])
      }
      str.push('ay')
    }
  
    str = str.join("")
    
    console.log(str) // aliforniacay
    return str;
  }
  
  translatePigLatin("california");

//Search and Replace
function myReplace(str, before, after) {
  
    str=str.split(" ")
    for(var i=0;i<str.length;i++){
      if(str[i]==before){
        if(before[0]==before[0].toUpperCase()){
          after=after.charAt(0).toUpperCase() + after.slice(1);
          console.log(after)
        }
        else{
          after=after.toLowerCase()
        }
        str[i]=after
      }
    }
    str = str.join(" ")
    
    console.log(str)
    return str;
  }
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//DNA Pairing
function pairElement(str) {
    var result=[]
    
    for(var i=0;i<str.length;i++){
      var temp=[str[i]];
      if(str[i]=='A'){
        temp=temp.concat('T')
        result.push(temp)
      }
      else if(str[i]=='T'){
        temp=temp.concat('A')
        result.push(temp)
      }
      else if(str[i]=='G'){
        temp=temp.concat('C')
        result.push(temp)
      }
      else if(str[i]=='C'){
        temp=temp.concat('G')
        result.push(temp)
      }
    }
    console.log(result)
    return result;
  }
  pairElement("CTCTA");

  //Missing letters
  function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i)-97;
      console.log(code)
      if (code !== str.charCodeAt(0) + i - 97) {
        return String.fromCharCode(code - 1 + 97);
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");

//Convert HTML Entities
function convertHTML(str) {

var str = str.split("");

for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
    case "<":
        str[i] = "&lt;";
        break;
    case "&":
        str[i] = "&amp;";
        break;
    case ">":
        str[i] = "&gt;";
        break;
    case '"':
        str[i] = "&quot;";
        break;
    case "'":
        str[i] = "&apos;";
        break;
    }
    }

    str = str.join("");
    return str;
}

convertHTML("Dolce & Gabbana");

//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    var n1=1;
    var n2=1;
    var nextTerm=0;
    var result=1;
  
   while(nextTerm<=num){
     //console.log(n1);
     nextTerm = n1 + n2;
     n1 = n2;
     n2 = nextTerm;
     if(n1%2!=0){
       result+=n1
     }
   }
    return result;
  }
  
  sumFibs(75025);

//Sum All Primes
function isPrime(num) {
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      } 
    }
    return true;
  }
  
  function sumPrimes(num) {
    var sum=0;
  
    for (var i=2;i<=num;i++){
      if(isPrime(i)){
        sum+=i;
      }
    }
    console.log(sum)
    return sum;
  }
  
sumPrimes(977);

//Drop it
function dropElements(arr, func) {
    var times = arr.length;
    var res=[]
    var i=0;
    for (i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        break;
      }
    }
    for(var j=i;j<arr.length;j++){
      res.push(arr[j])
    }
    console.log(res)
    return res;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

//Steamroller
function steamrollArray(arr) {
    var newarr=[]
    var flatten = function(a) {
      if (!Array.isArray(a)) {
        newarr.push(a);
      } else {
        for (var item in a) {
          flatten(a[item]);
        }
      }
    };
  
    arr.forEach(flatten);
    console.log(newarr)
    return newarr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

//Binary Agents
function binaryAgent(str) {

    str = str.split(" ");
    var res=[]
    for(var i=0;i<str.length;i++){
      res.push(String.fromCharCode(parseInt(str[i], 2)))
    }
    res=res.join("")
    return res;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Everything Be True
function truthCheck(collection, pre) {

    for(var i=0;i<collection.length;i++){
      if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]))
      {
        continue;
      }
      else{
        return false;
      }
    }
    return true;;
  }
  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//Make a Person
var Person = function(firstAndLast) {
  
    var fullName = firstAndLast;
    //console.log(fullName)
  
    this.getFirstName = function() {
      var temp = fullName.split(" ");
      return temp[0];
    };
  
    this.getLastName = function() {
      var temp = fullName.split(" ");
      return temp[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      var temp = fullName.split(" ");
      fullName = name + " " + temp[1];
    };
  
    this.setLastName = function(name) {
      var temp = fullName.split(" ");
      fullName = temp[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  var bob = new Person("Bob Ross");
  bob.getFullName();

//Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var pi = Math.PI;
    var final=[]
  
    for(var i=0;i<arr.length;i++){
      var alt = arr[i]['avgAlt'];
      var name = arr[i]['name'];
  
      var res = Math.pow(earthRadius + alt, 3);
      var res1 = Math.sqrt(res / GM);
      var result = Math.round(2*pi* res1);
      var temp={
        name: name,
        orbitalPeriod: result
      }
      final.push(temp)
    }
    return final;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//Smallest Common Multiple
function smallestCommons(arr) {

    let max = Math.max(...arr);
    let min = Math.min(...arr);
  
    let sol = max;
  
    for (let i = max - 1; i >= min; i--) {
      if (sol % i) {
        sol += max;
        i = max;
      }
    }
    return sol;
  }
  
  smallestCommons([2, 10]);

//Arguments Optional
function addTogether() {

    var a = arguments[0];
    var b = arguments[1];
  
    if (arguments.length > 1) {
      var ta = typeof(a);
      var tb = typeof(b);
  
      if (ta != 'number' || tb != 'number')
      {
        return undefined;
      }
      else {
        return a + b;
      }
    }
    else
    {
      var c = arguments[0];
      var tc = typeof(c);
      if(typeof(c)!='number'){
        return undefined;
      }
      if (c) {
        return function(arg2) {
          if ( tc != 'number' || typeof(arg2) != 'number') {
            return undefined;
          } else {
            return c + arg2;
          }
        };
      }
      return undefined;
    }
  }
  addTogether(2, 3) //5
  addTogether(23, 30) //53
  addTogether(5)(7) //12
  addTogether("http://bit.ly/IqT6zt") //undefined
  addTogether(2, "3")  //undefined
  addTogether(2)([3])  //undefined