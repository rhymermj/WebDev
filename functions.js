console.log("isEven");

function isEven(num){
    if( num % 2 === 0 ){
        return true;
    }
    // Need else otherwise return stops 
    else{
        return false;
    }    
}

/* As shown in solution
function isEven(num){
    return num % 2 === 0;   // boolean expression itself
}
*/

console.log("factorial");

function factorial(num){
    var n = 1;
    for (var i = 2; i <= num; i++){
        n *= i;
    }
    return n;
}

console.log("kebabToSnake");

function kebabToSnake(str){
    newStr = str.replace("-", "_");
    return newStr;
}