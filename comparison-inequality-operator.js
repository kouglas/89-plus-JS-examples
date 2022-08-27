//setup 
function testNotEqual(val) {
    if (val != 99) { //equality and inequality operators
        //allow for type conversion
        return "Not Equal";
    }
    return "Equal" // return outside of the curly braces
    //of a function acts like "else"
}

console.log(testNotEqual(10));

//comparison with Strict inequality operator
//setup 
function testStrictNotEqual (val) {
    if (val !== 17) {

        return "Not Equal";
    }

    return "Equal";
}

console.log(testStrictNotEqual(10))