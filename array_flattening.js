let arrays = [[1, 2, 3], [4, 5], [6]];
// used reduce to concat all the three arrays
arr = arrays.reduce((a,b) => a.concat(b));
//displaying the result after the reduction is complete
console.log(arr);



// → [1, 2, 3, 4, 5, 6]