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



