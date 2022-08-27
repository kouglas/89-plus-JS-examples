//example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray)

//manipulate arrays with pop

var newArray = [1,2,3];
var removedFromOurArray = newArray.pop();
console.log(newArray)

//manipulate arrays with shift 

var nextArray = ["Stimpson", "J", ["cat"]];
var removedFromNextArray = nextArray.shift(); // removedFromNextArray now
//equals "Stimpson" and nextArray now equals ["J", ["cat"]]
console.log(nextArray)

// manipulate arrays with unshift
var nowArray = ["Stimpson", "J", "cat"];
nowArray.shift(); // nowArray equals ["J", "cat"]
nowArray.unshift("Happy"); // nowArray now equals ["Happy", "J", "cat"]
console.log(nowArray) 