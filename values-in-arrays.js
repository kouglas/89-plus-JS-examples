//example 
var OurArray = ["John", 23];

//only change code below this line
var myArray = ["Quincy", 1];

//nested arrays

//example 
var ourArray = [["the universe", 42], ["everything", 101010]];

//access array data with indexes 
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log(ourData) 

//modify array data with indexes
//example
var newArray = [18, 64, 99];
newArray[1] = 45; // newArray now equals [18, 45, 99].
console.log(newArray)

//access multi-dimensional arrays with indexes 
//example
var nextArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];


var myData = nextArray[2][1] // so this goes to the third array and to the second value inside of the third array ie 8
console.log(myData)