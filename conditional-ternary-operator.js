//condition ? statement-if-true: statement-if-false
function checkEqual(a,b) {
   return a === b ? true : false;
}

checkEqual(1, 2);

//like a one line if else statement 



//multiple conditional (ternary) operators
function checkSign(num) {
    return num > 0 ? "positive" :  num < 0 ? "negative" : "zero"
}
console.log(checkSign(5));