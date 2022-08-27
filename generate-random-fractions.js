function randomFraction() {

    return Math.random();
}
console.log(randomFraction());




//generate random whole numbers
var randomNumberBetween0an19 = Math.floor(Math.random() * 20); 
//the above rounds down to a whole number
//when we multiply by 20 we get a number between 0 and 19

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());