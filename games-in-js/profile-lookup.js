var contacts = [
    {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Pens"]
}, 
{
    "firstName": "Mike",
    "lastName": "Whocheese-Erry",
    "number": "00994372684",
    "likes": ["Cheese", "Goth", "Cha cha dance"]
}, 
{
    "firstName": "Lambda",
    "lastName": "Stans-Rise",
    "number": "0487344562",
    "likes": ["Intriguing Cases", "Violin", "Kittens"]
}, 
{
    "firstName": "Roger",
    "lastName": "Fruity-era",
    "number": "unknown",
    "likes": ["Implants", "Botox", "Face Products"]
}, 
];

function lookUpProfile(name, prop) {
    for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";

}

var data = lookUpProfile("Mike", "lastName");

console.log(data);