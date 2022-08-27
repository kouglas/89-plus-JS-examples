//example
function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) { //both statements have to be true
        //to return yes
        return "Yes";
        }
    return "No";
}

//change this value to test
testLogicalAnd(10);

//comparisons with logical Or operator
//example
function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

//change this value to test
console.log(testLogicalOr(15));