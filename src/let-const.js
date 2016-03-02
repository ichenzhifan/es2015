/**
Block-scoped binding constructs. 
let is the new var. 
const is single-assignment. Static restrictions prevent use before assignment
*/

function f() {
    let x;

    let say = () => {
        const y = 10;

        // error, const
        // y = 20;

        return y;
    };

    // ok, let.
    x = 20;

    return x + say();
}

alert(f());
