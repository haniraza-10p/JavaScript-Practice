//Palindrome Checker
function palindrome(str) {

    str = str.replace(/[^0-9A-Z]+/gi,"");
    str=str.toLowerCase()
  
    var len = str.length
    var len1 = parseInt(len/2)
  
    var str1=str.slice(0,len1)
    var str2 = str.substr(str.length - len1);
    str2 = str2.split("").reverse().join("");
    for(var i=0;i<len1;i++){
      if(str1[i]!=str2[i]){
        return false;
      }
    }
    return true;
  }
  palindrome("eye");

//Roman Numeral Converter
function convertToRoman(num) {
       
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var romanized = "";

    for (var i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= num) {
            romanized += romanNumeral[i];
            num -= decimalValue[i];
        }
    }
    return romanized;
}

convertToRoman(83);

//Caesars Cipher Decryption
function rot13(str) {
  
    str=str.toLowerCase();
    var res = [];
  
    for(var i=0;i<str.length;i++){
      var temp = str.charCodeAt(i) - 97
  
      if(temp<0 || temp >25){
        var temp1 = String.fromCharCode(97 + temp)
      }
      else if(temp<13){
        var temp1 = String.fromCharCode(97 + temp+13)
      }
      else{
        var temp1 = String.fromCharCode(97 + temp-13)
      }
      res.push(temp1)
    }
  
    res=res.join("");
    res=res.toUpperCase();
    return res;
  }
  
rot13("SERR CVMMN!"); //FREE PIZZA!

//Telephone Number Validator
function telephoneCheck(str) {

    if(str[0]=='-'){
      return false;
    }
  
    str = str.replace(/[^0-9()]+/gi,"");
    if(str.length==10){
      return true;
    }
    else if(str.length==11 && str[0]==1){
      return true;
    }
    else if(str.length==12 && str[0]=='(' && str[4]==')'){
      return true;
    }
    else if(str.length==13 && str[0]==1 && str[1]=='(' && str[5]==')'){
      return true;
    }
    return false;
  }
  
  telephoneCheck("(555)555-5555");

//Cash Register
function checkCashRegister(price, cash, cid) {

    var total = 0;
    for(var i=0;i<cid.length;i++){
      total+=cid[i][1]
    }
  
    var changeDue = cash-price;
  
    var data={}
    if(changeDue == total){
      data={
        status: "CLOSED",
        change: cid
      }
      return data;
    }
    if(changeDue > total){
      data={
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
      return data;
    }
  
    var returnCash =  [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
  
    while(changeDue!=0){
      changeDue=changeDue.toFixed(2);
      if(changeDue>=100 && cid[8][1]>=100){
        changeDue-=100
        returnCash[8][1]+=100
        cid[8][1]-=100
      }
      else if(changeDue>=20 && cid[7][1]>=20){
        changeDue-=20
        returnCash[7][1]+=20
        cid[7][1]-=20
      }
      else if(changeDue>=10 && cid[6][1]>=10){
        changeDue-=10
        returnCash[6][1]+=10
        cid[6][1]-=10
      }
      else if(changeDue>=5 && cid[5][1]>=5){
        changeDue-=5
        returnCash[5][1]+=5
        cid[5][1]-=5
      }
      else if(changeDue>=1 && cid[4][1]>=1){
        changeDue-=1
        returnCash[4][1]+=1
        cid[4][1]-=1
      }
      else if(changeDue>=0.25 && cid[3][1]>=0.25){
        changeDue-=0.25
        returnCash[3][1]+=0.25
        cid[3][1]-=0.25
      }
      else if(changeDue>=0.1 && cid[2][1]>=0.1){
        changeDue-=0.1
        returnCash[2][1]+=0.1
        cid[2][1]-=0.1
      }
      else if(changeDue>=0.05 && cid[1][1]>=0.05){
        changeDue-=0.05
        returnCash[1][1]+=0.05
        cid[1][1]-=0.05
      }
      else if(changeDue>=0.01 && cid[0][1]>=0.01){
        changeDue-=0.01
        returnCash[0][1]+=0.01
        cid[0][1]-=0.01
      }
      else{
        data={
          status: "INSUFFICIENT_FUNDS",
          change: []
        }
        return data;
      }
    }
  
    var newReturnCash=[]
    for(var i=7;i>=0;i--){
      if(returnCash[i][1]!=0){
        newReturnCash.push(returnCash[i])
      }
    }
  
    data={
      status: "OPEN",
      change: newReturnCash
    }
    return data;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])