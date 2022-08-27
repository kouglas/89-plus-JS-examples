//example
//here we start looking at index 0
//and then we add each index 0 - 3
//to var ourTotal

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for ( var i = 0; i < ourArr.length; i++) { //moving or iterating
    //through ourArr
    ourTotal += ourArr[i]; //adding each index
    //of ourArr to ourTotal which sums up
    //all the items in ourArr
}

console.log(ourTotal);

//setup
var myArr = [2, 3, 4, 5, 6];
let total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);