//
//example 
function testGreaterThan(val) {
    if (val > 100) {
    return "Over 100";
}
if (val > 10) { 
    return "Over 10"
}
return "10 or Under";
}

console.log(testGreaterThan(10));

//comparison using greater than equal to operator 
//example
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));

//comparison with less than works similar
//comparison with less than or equal to works similar to the above