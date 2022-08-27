//only works correctly due to correct 
//if else order
//example
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
//change this value to test
console.log(orderMyLogic(3));

// chaining if else statements 
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small" 
    } else if (num < 15) {
        return "Medium" 
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(20));
