//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
  }
  
  convertToF(30);

//Reverse a String
function reverseString(str) {
  
    var sp = str.split("");
    var rev = sp.reverse();
    var join = rev.join("");
    return join;
  
  }
  
  reverseString("hello");

//Factorialize a Number
function factorialize(num) {
  
    var f = 1;
    for(let i =1 ; i<=num; i++){
      f=f*i
    }
    return f;
  }
  
  factorialize(5);

//Find the Longest Word Length in a String
function findLongestWordLength(str) {
  
    let max=0;
    var sp = str.split(" ");
    console.log(sp.length)
  
    for(let i=0; i<sp.length; i++){
      let l = sp[i].length;
      if(l>max){
        max=l;
      }
    }
    
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
    let max = [];
    for(let i=0;i<4;i++){
      let num=-100000000000000000;
      for(let j=0;j<4;j++){
        let temp = arr[i][j];
        if(temp>num){
          num=temp;
        }
      }
      max.push(num)
    }
    return max;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//Confirm the Ending
function confirmEnding(str, target) {
  
    let l = str.length;
    
    if(str[l-1]==target){
      return true;
    }
    return false;
  }
  
  confirmEnding("Bastian", "n");

//Confirm the Ending
function confirmEnding(str, target) {
  
    let s = str.length;
    let t = target.length;
  
    if(str.slice(s-t)==target){
      return true;
    }
    return false;
  }
  
  confirmEnding("He has to give me a new name", "name");

//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  
    let arr=[];
    if(num>0){
      for(let i=1;i<=num;i++){
        arr.push(str)
      }
    }
    arr=arr.join("");
    return arr;
  }
  
  repeatStringNumTimes("abc", 8);

//Truncate a String
function truncateString(str, num) {
  
    let str1 = str.slice(0,num);
    if(str1.length != str.length){
       str1=str1 + "...";
    }
    console.log(str1)
    return str1;
  }
  
  truncateString("Absolutely Longer", 2);

 //Finders Keepers
 function findElement(arr, func) {
  
    for(let i=0;i<arr.length;i++){
      if((func(arr[i]))==true){
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

// checking if element is bool
function booWho(bool) {
    if(typeof(bool)=='boolean'){
      return true
    }
    return false;
  }
  
  booWho(null);function booWho(bool) {
    if(typeof(bool)=='boolean'){
      return true
    }
    return false;
  }
  
  booWho(null);

//Title Case a Sentence
function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    
    for(let i=0;i<str.length;i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(' ');
    return str;
  }
  
titleCase("I'm a little tea pot");

//Copy each element of the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
  
    var temp = arr2.slice(0,n)
    for(let i=0;i<arr1.length;i++){
      temp.push(arr1[i]);
    }
    for(let i=n;i<arr2.length;i++){
      temp.push(arr2[i]);
    }
    return temp;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer
function bouncer(arr) {
  
    var temp=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
        temp.push(arr[i])
      }
    }
    return temp;
  }
  
  bouncer([7, "ate", "", false, 9]);

//Where Do I Belong
function getIndexToIns(arr, num) {
  
    var pos=0;
    for (var i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
        pos++;
      }
    }
    console.log(pos)
    return pos;
  }
  
  getIndexToIns([2, 20, 10], 19);

//Mutations
function mutation(arr) {
  
    var check = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
  
    for (var i = 0; i < check.length; i++) {
      if (target.includes(check[i])==false){
        return false;
      }
    }
    return true;
  
  }
  
  mutation(["hello", "hey"]);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  
    var start=0;
    var final = [];
  
    while(start!=arr.length){
      var temp = arr.slice(start,start+size);
      final.push(temp)
      start=start+size;
      if(start + size >= arr.length){
        temp = arr.slice(start,arr.length);
        final.push(temp)
        break;
      }
    }
  
    console.log(final)
    return final;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);