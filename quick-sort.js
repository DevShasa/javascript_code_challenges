/**
 * Uses Quick sort to sort an array of numbers
 * 
 * @param {number[]} - an unsorted number array
 * @return {number[]} -  the sorted number array 
 */
function quickSort(unsortedArr){
    // prevent recursion if array size is one
    if(unsortedArr.length <= 1) return unsortedArr

    let pivot = unsortedArr[0]
    let leftArr = []
    let rightArr = []

    //loop and place all items smaller than array to the left of pivot
    // and all items greater than array to the right of pivot
    for(i = 1; i < unsortedArr.length; i++){
        if(unsortedArr[i] < pivot){
            leftArr.push(unsortedArr[i])
        }else{
            rightArr.push(unsortedArr[i])
        }
    }

    // the above function does not check the order of larr or rARR
    //... for that we have to recursiively go through larr ans r.arr
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}


console.log(quickSort([2,1,2,1,5,6,8,9,3,4,9,0]))