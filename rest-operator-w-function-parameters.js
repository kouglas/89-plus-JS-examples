//the rest operator allows
//you to make function that
//takes a function and allows
//you to take a variable amount
//of parameters

//example
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));