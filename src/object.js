/*
Object.assign() 方法可以把任意多个的源对象所拥有的自身可枚举属性拷贝给目标对象，然后返回目标对象。
*/

// 1. 浅拷贝一个对象
let obj = {
    name: 'joke',
    contact: [11, 22]
};

let t = Object.assign({}, obj);

// 2. 合并若干个对象
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };
let o4 = { d: 4 };

let obj1 = Object.assign({}, o1, o2, o3, o4);

// 3. 继承属性和不可枚举属性是不能拷贝的
let obj2 = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

let copy = Object.assign({}, obj2);
console.log(copy); // { baz: 3 }
