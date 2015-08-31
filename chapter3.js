function range(n1,n2,step){
	var rArray = [];
	step = step || 1;
	console.log(step);
	if (step === 0) step = 1;
	if (step > 0){
		for(i=n1;i<=n2;i+=step){
			rArray.push(i);
		}
	} else {
		console.log("negative step " + step);
	}
	return rArray;
}
function sum(tArray){
	var ret_sum = 0;
	for(i=0;i<tArray.length;i++){
		ret_sum += tArray[i];
	}
	return ret_sum;
}
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));


function reverseArray(rArray){
 var tArr = [];
 for (i=rArray.length-1;i>=0;i--){
	 tArr.push(rArray[i]);
 } 
 return tArr;
}
function reverseArrayInPlace(arr){
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
}
