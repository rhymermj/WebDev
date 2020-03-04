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

function factorialSolution(num){
    // define a result variable
    var result = 1;

    // calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        result = result * i;
    }
    // return the result variable;
    return result;
}

function factorialByDecrement(num){
    /* if set condition i >= 1 in for loop below
    if( num === 0){
        return 1;
    }
    */
    var result = num;
    for(var i = num-1; i > 0; i--){
        result = result * i;
    }
    return result;
}

console.log("kebabToSnake");

// This function is INCORRECT since it ONLY replaces the FIRST DASH 
function kebabToSnake(str){
    var newStr = str.replace("-", "_");
    return newStr;
}

// Performs global replacement
function kebabToSnakeSolution(str){
    // replace whatever character between the slashes with newchar ("_")
    var newStr = str.replace(/-/g, "_");
    return newStr;
}