const arrayValues = [2,2,4,2,6,2]

for(let i =0; i < arrayValues.length; i++){
    console.log(arrayValues[i])
}
// Alternative to looping
console.log([2,2,4,2,3,2].some(x => x %2 === 1)) // some are odd
console.log([2,2,4,2,8,2].every(x => x %2 === 0)) // Each one is odd
console.log([2,2,4,"wolan",8].indexOf("wolan")) // return index of item
console.log([2,2,4,"wolan",8].includes("wolan")) // Includes this item


// Array transformations
// > Pure methods do not modify original array, they return a new array
// > Other methods manipulate the array directly and and do not return an array
/**
 * PURE ARRAY TRANSFORMATIONS
 * map
 * filter
 * reduce
 * slice
 * (IMPURE) ARRAY TRANSROMATIONS
 * reverse
 * splice
 * sort
 */
const arr = ['1', '2', '5', '6'];
// Insert an element at index 2
arr.splice(2, 0, '3');
console.log(arr);
// => ['1', '2', '3', '5', '6']
// Remove 2 elements, starting at index 3 and insert 2 elements
const removed = arr.splice(3, 2, '4', '5');
console.log(removed);
// => ['5', '6']
console.log(arr);