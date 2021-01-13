function equals(a, b){
    return ( a === b );
}
equals(2, 2);

function compare(a, b){
      if ( a < b){
        return -1;

      } if ( a === b){
          return 0;
      }else {
          return 1;
      }
}
compare (1, 2);

function max (a ,b){
    if ( a > b){
        return a;
    }else{
        return b;
    }
}
max (2, 2);

function min (a, b){
    if (a < b ){
        return a;
    }else {
        return b;
    }
}
min (2, 2)
function suma(n){
    var i = 0;
    var sum = (n * (n+1)) / 2;
    for(i=1; i<=n;i++){
        return sum+=i;
    }
}
function suma(number) {
    if (Number.isInteger(number) && number > 0) {

        let sum = (number * (number + 1)) / 2;
        return sum;
    }
}
function prim(number) {
    for (var i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}
function sumaPrime(num) { function sumaPrime(num) {
    let primeList = [];
    let primeSum = 0;
    for (let i = 2; i > 0; i++) {
        if (isPrime(i)) {
            primeList.push(i);
            primeSum += i;
            if (primeList.length === num) {
                break;
            }

        }
    }

    return primeSum;
}
    function isPrime(number) {
      for (let i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {
          return false;
        }
      }
      return true;
    }
    if (num === 1) {
      return 0;
    }
  
    if (isPrime(num) === false) {
      return sumaPrime(num - 1);
    }
  
  
    if (isPrime(num) === true) {
      return num + sumaPrime(num - 1);
    }
  }
  
  sumaPrime(10);

function invers(n){
    var inversat = 0;
    while (n != 0) {
        inversat *= 10;
        inversat += n % 10;
        n -= n % 10;
        n /= 10;
       }
      
       return inversat;
      }
    
function produsImpare(num) {
        let impareList = [];
        let impareProduct = 1;
        for (let i = 1; i > 0; i++) {
            if (i % 2 !== 0) {
                impareList.push(i);
                impareProduct *= i;
                if (impareList.length === num) {
                    break;
                }
            }
        }
        return impareProduct;
}

function contains(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }
    return false;
}


function maxArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function sumMinMax(arr) {
    let min = Number(arr[0]);
    let max = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (Number(arr[i]) > max) {
            max = Number(arr[i]);
        }
        if (Number(arr[i]) < max) {
            min = Number(arr[i]);
        }
    }

    return min + max;
}
function hasDuplicates(a) {
    for (let i = 0; i < a.length; i++) {
      if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
        return true
      }
    }
    return false
}
function produsPozitive( array ) {
    var sum = 1;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum *= array[i];
        }
    }
    return sum;
}
    function palindrom(str) {

        var len = str.length;
        var mid = Math.floor(len/2);
    
        for ( var i = 0; i < mid; i++ ) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
    
        return true;
}
