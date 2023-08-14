// Demonstrate how template literals allow for variable interpolation
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`)

// Rewrite the above example using the + operator
var greet1 = "Hello";
var place1 = "World";
console.log(greet1 + " " + place + "!" )

// Perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)