/**
Template strings provide syntactic sugar(``, not '') for constructing strings. 
This is similar to string interpolation features in Perl, Python and more. 
Optionally, a tag can be added to allow the string construction to be customized, 
avoiding injection attacks or constructing higher level data structures from string contents.
*/

let a = 5;
let b = 10;
let s = `Fifteen is ${a + b} and\nnot ${2 * a + b}.`;

// Fifteen is 15 and
// not 20.
console.log(s);

// 'Hi\n5'
String.raw`Hi\n${2+3}!`;