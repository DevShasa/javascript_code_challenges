/**
 * Accepts two arrays sorts them from smallest then merges them
 * @param {number[]}
 * @param {number[]}
 * @return {number[]} - the merged and sorted array 
 */
function merge(left, right){
    let finalSortedArr = []

    while(left.length && right.length){
        // Insert the smallest element into the sorted arrray
        if(left[0] < right[0]){
            finalSortedArr.push(left.shift())
        }else{
            finalSortedArr.push(right.shift())
        }
    }

    return [...finalSortedArr, ...left, ...right]
}

console.log(merge([3, 4, 7,], [5,6 ,10]));

/**
 * Function that splits an array into one [1] size
 */
function mergeSort(arr){
    const half = Math.floor(arr.length/2)

    if(arr.length <=1){
        // if there is only one item in the array, return that
        return arr 
    }

    const lArr = arr.slice(0, half)
    const rArr = arr.slice(half)

    // the recursive call will continiously split the array into arr.length = 1...
    // while merge will reasemble the array while sorting it
    return merge(mergeSort(lArr), mergeSort(rArr))
}

console.log(mergeSort([2,1,2,1,,5,6,8,9,3,4,9,0]))