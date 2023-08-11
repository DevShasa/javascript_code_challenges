/**
 * Return unique numbers in an array
 * 
 * @param {Array} - an array of numbers
 * @returns {Array} - An array only containing unique numbers
 */
function returnUniqueItems(numarr){
    const uniqueArr = []
    for(let i = 0; i < numarr.length; i++){
        if(!uniqueArr.includes(numarr[i])){
            uniqueArr.push(numarr[i])
        }
    }

    return uniqueArr
}

function returnUniqueItemsSetMethod(numArr){
    return [...new Set(numArr)]
}


console.log(returnUniqueItems([1,3,3,4,5,6]))
console.log(returnUniqueItemsSetMethod([1,3,3,4,5,6,6,7,5,8,8]))