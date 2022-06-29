/**
 * @description Function takes an array of numbers and returns the sum of the two lowest positive numbers. Don't count negative numbers.
 * @param {Array} arr 
 * @returns Integer : the sum of the two smallest numbers
 */

function sumTwoSmallestNums(arr) {
    /**
     * Finding the minimun element of array
     */
    let first_min = Math.min(...arr)
    /**
     * Checking if the minimun element is lower than 0, if yes than removing that element and calling function recursively 
     */
    if( first_min < 0 ){
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
		return sumTwoSmallestNums(arr)
    }
    else {
        /**
        * else deleting the minimum element 
        */
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        /**
         * finding minimum element after deleting the first one
         */
        let second_min = Math.min(...arr)
        /**
         * counting and returning of the sum
         */
        return first_min + second_min 
    }  
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))