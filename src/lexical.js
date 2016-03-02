/**
 They support both expression and statement bodies.
 Unlike functions, arrows share the same lexical this as their surrounding code.
*/
let bob = {
    _name: 'bob',
    _friends: ['f1'],
    print(){
    	this._friends.forEach(f => {
            console.log(this._name + ' friend: ' + f);
        });
    }    
};

bob.print();
