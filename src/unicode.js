/**
Non-breaking additions to support full Unicode, including new unicode literal 
form in strings and new RegExp u mode to handle code points, as well as new APIs to 
process strings at the 21bit code points level. These additions support building global 
apps in JavaScript.
*/

// 1. same as es5.1
console.log('好'.length) // 1

// 2. new RegExp behavior, opt-in 'u'
console.log('好'.match(/./u)[0].length); // 1

// 3. new string ops
console.log('好'.codePointAt(0)); // 22909

// 4. for-of iterates code point
for (var c of '好') {
	console.log(c);
}
