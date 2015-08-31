// List using references
function arrayToList(arr){
  	var list = {value: arr[arr.length-1], rest: null};
	for(i=arr.length-2;i>=0;i--){
	  list = {value: arr[i], rest: list};
	};
	return list;
}

function listToArray(tlist){
	var arr = [];
	for (var prop in tlist) {
		if (! prop === 'value') continue;
		arr.push(tlist[prop]);
	}
	return arr;
}
function prepend(){}
function nth(){}
