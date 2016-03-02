/**
Destructuring allows binding using pattern matching, with support for matching arrays and objects. 
Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values 
when not found.
*/

// 1. list matching
// a->1
// b->3
var [a, ,b] = [1,2,3];

// 2. object matching
// var _getNodes = getNodes();
// var op = _getNodes.op;
// var lhs = _getNodes.lhs;
// var rhs = _getNodes.rhs;
var {op, lhs, rhs} = getNodes();

function getNodes(){
	return {
		op : 1,
		lhs: {
			x: 10
		},
		rhs: ()=>{ return 100}
	};
}
//alert(rhs());

// 3. can be used in parameter position
function g ({name: x}) {
	 alert(x);
}

//g({name: 20});

// 4. destructuing + defaults arguments
function r ({x, y, w=100}) {
	 return x + y + w;
}

alert(r({
	x:10,
	y:10
}))