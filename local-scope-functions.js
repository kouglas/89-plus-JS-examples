//variables declared inside of a function have local scope,
//they can only be accessed/ visible inside that function 
//example
function myLocalScope () {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
