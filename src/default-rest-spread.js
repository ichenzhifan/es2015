/**
Callee-evaluated default parameter values. Turn an array into consecutive arguments in 
a function call. Bind trailing parameters to an array. Rest replaces the need for arguments 
and addresses common cases more directly.
*/

// default value in parameter
function g (x, y=10) {
	 // y is 10 if not passed
	 return x + y;
}
// alert(g(10));
// alert(g(10, 20));


// parameter is an array.
function add(x, ...y) {
	let _sum = x;

	if(y){
		y.forEach( (v, i) =>{
			_sum += v;
		});
	}

	 return _sum;
}
alert(add(2, 1,2,2,3)); // 10