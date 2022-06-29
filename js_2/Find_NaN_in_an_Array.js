/**
 * @description Function finds number of `NaN` in an array of numbers. The return value should be the index where `NaN` is found. If `NaN` is not found in the array, then return `-1`.
 * @param {Array} arr 
 * @returns the index of `NaN` if there is anf `-1`  if not
 */

function findNaN(arr) {
    for(let i = 0; i<arr.length; i++) {
        if(isNaN(arr[i])){
            return i
        }
    }
    return -1
}

console.log(findNaN([1, 2, NaN]))
console.log(findNaN([NaN, 1, 2, 3, 4]))
console.log(findNaN([0, 1, 2, 3, 4]))