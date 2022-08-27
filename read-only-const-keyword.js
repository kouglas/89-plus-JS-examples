function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    for(var i = 0; i < str.length; i+= 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//const is read only and cannot be reassigned
//const names are usually in all CAPS