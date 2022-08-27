// declare your variable here
//scope refers to the visibility of variables
//global scope means they can be seen everywhere in 
//the javascript code. These are set outside of a function 

// Declare your variable here

var myGlobal = 10;

function fun1() {
    //assign 5 to oopsGlobal here
    oopsGlobal = 5; 
}

//only change code above this line
function fun2() {
    var output ="";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
   if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
