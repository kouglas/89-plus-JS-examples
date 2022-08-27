//loops allow for you to 
//run the same code 
//multiple times

//this while loop works by starting at 0
//and incrementing i by 1 while it's less than 5
//giving us an output of an array of
//[0, 1, 2, 3, 4,]
var myArray = [];
var i = 0;
while(i < 5) {

    myArray.push(i);
    i++;
}

console.log(myArray);
