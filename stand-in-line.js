// a queue is a data structure where  items 
//are kept in order new items can be added to the back of
//the queue and old items are taken from the front


function nextInLine(arr, item) {
    //your code here 
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: ", JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));