/**
 * Reverse a string
 * 
 * @param {string} str - the string to be reversed 
 * @returns {string} the reversed string
 */
function reverseString(reverseThis){
    let newSStr = ""
    for(let i = 0; i < reverseThis.length; i++){
        newSStr = newSStr + reverseThis[(reverseThis.length - i) -1]
    }

    return newSStr
}

/**
 * Condensed function to reverse a string that uses string and array methods
 * 
 * @param {string} str - the string to be reversed
 * @returns {string} the reversed string 
 */
function reverseStringCondensed(str){return str.split("").reverse().join("")}



console.log(reverseString("Hello, world!"))
console.log(reverseStringCondensed("Hello, world!"))