//example

//setup
function testEqual(val) {
    if (val == 12) { //two equal signs is a the comparison
        //operator while one equal sign is the assignment 
        //operator 
        return "Equal";
    }
    return "Not Equal"
}

console.log(testEqual(10));

//comparison with the strict equality operator 
//setup 
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

//change this value to test
testStrict(10);

/* 
3 == 3

3 === '3'

*/

//setup
function compareEquality(a, b) {
    if (a === b ) { //this checks for STRICT equality and 
        //the result will be not equal because our console.log
        //is asking for an int type (10) and a string type ("10")
        //and those are not the same value
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));
