/**
 *  @description  Function that takes an array of items and checks if the last item matches the rest of the array concatenated together. 
 * @param {Array} arr 
 * @returns Boolean   
 */

function matchLastItem(arr) {
    /**
     * Deleting the last element
     */
    let lastElm = arr.pop()
    /**
     * Concatig all other elements
     *  */
    let joinElm = arr.join("")
    /**
     * Checking if concated elements and the last element are equal 
     */
    if( lastElm === joinElm ){
        return true
    }
    else {
        return false
    }
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))
console.log(matchLastItem([1, 1, 1, "11"]))
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))
