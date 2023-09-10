
// Create a function batches that returns the maximum number...
// ... of whole batches that can be cooked from a recipe.

/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`
*/
function batches(recipe, ingredients){
    const recipekeys = Object.keys(recipe)
    const ingKeys = Object.keys(ingredients)
    const batches = []
    for(let i = 0; i < recipekeys.length; i ++){
        let ammount = ingredients[ingKeys[i]]/ recipe[recipekeys[i]] 
        batches.push(ammount)
    }
    return Math.floor(Math.min(...batches))
}

console.log(batchesConsise(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  ))

console.log(batchesConsise(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  ))

function batchesConsise(recipe, ingredients){
    const divideResults = Object.keys(recipe).map(r=> ingredients[r]/recipe[r] || 0)
    return Math.floor(Math.min(...divideResults))
}