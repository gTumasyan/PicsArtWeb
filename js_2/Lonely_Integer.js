/**
 * @description You are given an array of integers having both **negative and positive** values, except for one integer which can be negative or positive. Create a function to find out that integer.
 * @param {Array} arr 
 * @returns Integer : the element which don't have the match 
 */

function lonelyInteger(arr) {
        for(let i = 0; i<arr.length; i++) {
            /**
             * Checking if there is oposite of the element,
             * if yes than continue else return the element
             */
        if(arr.includes(-arr[i])){
            continue
        }
        else {
            /**
             * returning the element
             */
            return arr[i]
        }
    }
}

console.log(lonelyInteger([1, -1, 2, -2, 3]))
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]))
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]))