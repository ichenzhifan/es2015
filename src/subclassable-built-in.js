/**
	In ES2015, built-ins like Array, Date and DOM Elements can be subclassed.
*/

class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    say(key) {
        return key;
    }
}

let me = new MyArray();
console.log(me.say('111'));
