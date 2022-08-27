function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: //if the case of value === 1 
        //then it sets answer to equal alpha
            answer = "alpha"
            break;  //stops evaluation of switch statement 
            //without breaks then the program keeps running 
            //through the options
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4: "delta"
        break;
    }

    return answer;
}

console.log(caseInSwitch(1));