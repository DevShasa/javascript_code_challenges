/**
 * @param {number[]} - an array of numbers
 * @returns {number[]} - a sorted array of numbers
 */
function bubbleSort(numberArr){
    let sorted =  false
    for(let y = 0; y < numberArr.length; y++){
        if(sorted) break
        sorted =  true
        for(let i = 0; i< numberArr.length; i++){
            if(numberArr[i] > numberArr[i +1]){
                sorted = false
                let x = numberArr[i +1] 
                numberArr[i+1] = numberArr[i]
                numberArr[i] = x
            }
        }
    }

    return(numberArr)
}

console.log(bubbleSort([908, 8,10,1, 4,5,6,3,0, 7, -1]))