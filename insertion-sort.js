/**
 * Insertion sort 
 * 
 * @param {number[]} - array of unsorted numbers
 * @return {number []} - array of sorted numbers
 */
function insertionSort(unsortedArr){
    // outer loop
    for(let x = 1; x< unsortedArr.length; x++){
        let currentValue = unsortedArr[x]
        let j = x -1 // j=0 x=1

        // inner loop that moves opposite to outer loop
        while(j >=0 && unsortedArr[j] > currentValue){//  arr[0] is bigger than  arr[1]
            

            //arr[1] = arr[0] > move bigger value to th the right
            unsortedArr[j+1] = unsortedArr[j]
            j--
        }
        unsortedArr[j+1] = currentValue 
    }

    return unsortedArr
}