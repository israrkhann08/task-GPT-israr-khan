



// example 1:
const f = (x) => x + 2
const g = (x) => x * 3

// Composing f and g
const composedFunction = (x) => f(g(x)) 

console.log(composedFunction(2))