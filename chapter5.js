var arrays = [[1, 2, 3], [4, 5], [6]];
var myArray = [];
console.log(arrays.reduce(function(myArray,cur) {
  if (Object.prototype.toString.call( cur ) === '[object Array]') return myArray.concat(cur);
  else return console.log("What the Fuck");
})); 
console.log( Object.prototype.toString.call( arrays[1] ));
// → [1, 2, 3, 4, 5, 6]

