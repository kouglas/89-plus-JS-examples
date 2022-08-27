//using nested for loops to access items
//inside nested arrays 
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) { //checks the length
        //of each array below
        for (var j = 0; j < arr[i].length; j++) { //checks index of
        //each different array inside the nested array 
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);