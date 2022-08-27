//setup 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16; 
var player = testObj[playerNumber];

//updating object properties
//example 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper"

//setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "color": "black"
};


myDog.name = "Happy Coder"
//add new properties to objects  
myDog['bark'] = "woof!"

//delete properties from objects
delete myDog.color;

