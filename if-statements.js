// used to make decisions in code 
//tells the script to execute the code
//inside the parenthesis

//example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { //if isItTrue variable it'll
        //the code inside the curly braces is ie 
        //"yes it's true"
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No that was false";

}

console.log(trueOrFalse(true));
