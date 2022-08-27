//example
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"; //local scope takes precedence
    //over global scope so console will return "sweater" 
    //before returning "T-shirt"

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//return a value from a function
//example
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//second example
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));