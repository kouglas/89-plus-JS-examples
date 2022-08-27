var voxel = {x: 3.6, y: 7.4, z: 6.54 };

//if we wanted to take each
//individual element in this object 
//and assign it to its own
//variable this is the old approach
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;


//destructuring syntax here:
const { x : a, y : b, z : c } = voxel; //get the field of
//x and copy it into a...and so on

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    
    const {tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));