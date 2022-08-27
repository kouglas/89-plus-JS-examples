const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']; 
let arr2;
(function()  {
    arr2 = [...arr1]; //spreads out the contents of 
    //arr1 into the value of arr2
    //I'm guessing we're just ignoring
    //the value of arr1[0]
    arr1[0] = 'potato'
})();
console.log(arr2);

//the spread operator looks like
//rest operator (...)
//it takes an array and spreads
//it out into individual items