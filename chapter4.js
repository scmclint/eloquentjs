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

/* function nth(tlist,indexOf){
	// recursive to return the value provided in a List
	// breaks down list to see if it is the first value
	return listToArray(tlist)[indexOf];
}*/
function nth(tlist,indexOf){
	if (tlist.rest != null && indexOf > 0 ) {
	 nth(tlist.rest,indexOf -= indexOf);
	}else{	
		var h = tlist.value;
	 console.log(h);
	 return h;
  }
}

/*function prepend(telement,tlist){
	// add telement to the front of tlist
	tlist = {telement, rest: tlist};
	return tlist;
}*/


//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(typeof nth(arrayToList([10, 20, 30]), 1));
// → 20

// ===========================================

function deepEqual(o1, o2,insideFunc){
	// compare objects by their values, not identity
	var sameObject = true;
	insideFunc = insideFunc || true;
	// objects and not null
	if ( typeof o1 == "object" && o1 != null && typeof o2 == "object" && o2 != null) {
		// both are not null and are objects
	
		if ( o1 === o2 ) {
			console.log("identical objects");
			return true;
		} else {
			// actually compare each key in the object for their equivilency
			console.log("made it into the deep comparison");
			//for (var node = o1; node; node = o1.rest)	{
			for (var node in o1) {
				console.log(o1[node]);
				console.log(o2[node]);
				if (o1[node] === o2[node]) {
					console.log("o1 and 2 objects are the same");
					continue;
				} else if (typeof o1[node] === 'object' && typeof o2[node] === 'object' ) {
					console.log("o1 and o2 are objects ");
					sameObject = deepEqual(o1[node],o2[node],insideFunc);
				} else {
					console.log("The Properties in o1 and o2 are NOT objects ");
					sameObject = false;
				}
			} // first object loop
		}  
	} else {
		console.log("not objects or one of them is null");
		sameObject = false;
	} // not objects or null objects immediate failure
  return sameObject;
}  // end of function deepEqual


var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true