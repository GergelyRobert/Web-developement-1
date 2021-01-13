function getDigits(str) {
    return str.replace(/\D/g, "");
}
function getLetters(str){
    return str.replace(/[^a-zA-Z]/g, "");
}

function getFirst5Letters(str){
    let string = str.replace(/[^a-zA-Z]/g, "");
    return string.slice(0, 5);
}
function concatenate(str){
    return str.join('');
}
function getAllDigits(str){
    let digits = ''; 
    for ( let i = 0; i <= str.length;i++){
        digits += str[i]
    }
    return digits.match(/\d/g).join('');
   

}
function invertAllStrings(arr){
    let reversed = [];
   for (let i = 0; i <arr.length; i++){
       let str = "";
       for ( let j = arr[i].length - 1; j>=0;j--){
           str+=arr[i][j];
       }
       reversed.push(str);
   }
   return reversed;
}
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
}
function cmmdc(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}
function cmmmc(x,y){
    let multip = Math.min(x,y);
    while( multip >=2){
        if ( x % multip === 0 && y % multip === 0){
            return (x * y)/multip;
        };
        multip--;
    }
    return (x * y);  
}

function divizori(x) {
    let divs = [];
    for (let i = 2; i<x; i++){
        if ( x % i === 0 ){
            divs.push(i);
        }
    }
    return divs; 
}
function palindrom(str) {
    var re = /[^A-Za-z0-9]/g;
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}
function sort(a,b ){
    let sorted = [];
    for( let i = 0; i < a.length;i++ ){
        if ( a[i] % 2 === 0 ){
            sorted.push(a[i]);
        }
    }
    return sorted.sort(function(a,b){return a-b});
}

function sortAscDesc(a, b){
    let sorted = [];
    for ( let i = 0 ; i<a.length;i++){
        if ( a[i] % 2 === 0 && a > b){
            sorted.sort(function (a,b){return a<b}).push(a[i]);
        }
        
        else 
           sorted.sort(function(a,b) {return b<a}).push(a[i]);
    
}
return sorted;

}


function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return true;
        }

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}
function countBinarySearch(arr,number){
    let left = 0;
    let right = arr.length - 1;
    let count = o;
    let occurrence = 0 ;
    let result = {};

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      guess = arr[mid];
      if (guess > number){
             right = mid - 1;
             result.push(right);
            
        } 
       else if (guess < number){
        left = mid + 1
           result.push(left);
       
        }
    }
    return result;
    
}