class Book {
    constructor(author) {
        this._author = author; //private variable
        //gets set when you construct writer
    }

    //getter
    get writer(){
        return this._author;
    }
    //setter 
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32) //this variable is only accessible
            //within this class
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);