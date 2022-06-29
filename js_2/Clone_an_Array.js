/**
 * @description Function adds array as the last element of same array
 * @param {Array} arr 
 * @returns array with added element 
 */

function clone(arr){
    /**
     * Creating an empty array as last element of array
     */
	let k = arr[arr.length] = []
    /**
     * Adding the main array's elements to that array
     */
    for(let i = 0; i<arr.length-1; i++) {
        k[i] = arr[i]
    }
	return arr
}

console.log(clone([1,1]))
console.log(clone([1,2,3]))
console.log(clone(["x", "y"]))