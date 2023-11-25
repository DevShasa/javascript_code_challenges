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


// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck.map(x => x + x);
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    const narr = []
    for(let x = 0; x < deck.length; x++){
      if(deck[x] === 3){
        narr.push(3)
        narr.push(3)
        narr.push(3)
      }else{
        narr.push(deck[x])
      }
    }
    return narr
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
      const middle = deck.length/2
      return [deck[middle -1],deck[middle]]
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    const firstNum = deck.shift()
    const lastNum = deck.pop()
    const middle = Math.floor(deck.length/2)
    deck.splice(middle, 0, lastNum,firstNum )
  
    return deck
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    return deck.filter(x => x === 2)
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    return deck.sort((a,b)=> a-b)
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    return deck.reverse()
  }
  