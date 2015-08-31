// List using references
function arrayToList(arr){
  	var list = {value: arr[arr.length-1], rest: null};
	for(var i=arr.length-2;i>=0;i--){
	  list = {value: arr[i], rest: list};
	};
	return list;
}

function listToArray(tlist){
	var arr = [];
	for (var node = tlist; node; node = node.rest)	{
		arr.push(node.value);
	}
	return arr;	
}

function prepend(){}
function nth(){}

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
