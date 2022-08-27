function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14 //this can still be changed 
    };

    Object.freeze(MATH_CONSTANTS); //stops constants from
    //changing

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI)
//we have an object item (PI) that we
//don't want to change so we use Object.freeze