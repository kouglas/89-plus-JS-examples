//example
function testElse(val) {
    var result = "";

    if (val > 5 ) {
        result = "Bigger than 5"; 
    } else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(4));

//else - if statements
//example
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5"; 
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));