# Template literals examples

The aim of this reading is to help you understand how template literals work

## What are template literals
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JS language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:

```
'Hello, World!'
"Hello, World!"
```

Alongside the previous way to build strings, ES6 introduced the use of backtick characters as delimiters:
```
`Hello, World!`
```

The above code snippet is an example of a template string, which is also known as a template literal.

## Differences between a template and a regular string

There are several ways in which a template string is different from a regular string.

- First, it allows for variable interpolation:
```
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) // display both variables using the template literals
```

The above console will output:
```
Hello World !
```

Essentially, using template literals allows programmers to embed variables directly in between backticks, without the need to use the `+` operator and the single or double quotes to delimit string literals from variables.

In other words, in ES5, the above example would have to be written as follows:

```
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); // Display both variables without using template literals
```

- Besides variable interpolation, template strings can span multiple lines. For example:
```
"Hello,
World
!
```

This cannot be done using string literals (i.e. strings delimited in single or double quotes);

```
"Hello,
World"
```

The above code, when run will throw a syntax error.

Template literals allow for multi-line strings something that simply isn't possible with string literals.

- Additionally, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation

```
// It is possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)
```

The above example will console.log the following string: `5 stars!`

This opens up a host of possibilities. For example, it's possible to evaluate a ternary expression inside a template literal.

Some additional use cases of template literals are nested template literals and tagged templates. However, they are a bit more involved and are beyond the scope of this reading. 