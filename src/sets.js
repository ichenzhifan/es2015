/**
Efficient data structures for common algorithms. 
WeakMaps provides leak-free object-key’d side tables.
*/
import 'babel-polyfill';

// Sets
let s = new Set();
let obj = { name: 1 };
s.add('hello').add('john').add('!').add(obj);

// 1.size
console.log(s.size) // 4
    // 2.has
console.log(s.has(obj)) // true
    // 3.iterator
for (let v of s) {
    console.log(v);
}
// 4.to array
var myArr = Array.from(s);
console.log(myArr);

// 5. array to set
var newSet = new Set(myArr);

// 6. delete
s.delete('john');

// 7. clear
s.clear();

