/**
 * @description Function takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 * @param {Array} arr 
 * @returns Array : same array without duplicated elements 
 */

function removeDups(arr) {
    for(let i=0; i<arr.length;i++){
        /**
         * checking if element at this index is equal to others
         */
        for(let j = i+1; j < arr.length; j++){
            /**
             * if has one than deleteing that item
             */
            if(arr[i] == arr[j]){
                for(let j; j <arr.length; j++){
                    arr[j] = arr[j+1];
                }
                /**
                 * makeing decrement of j index and arr.length for avoidinf problem with undefined elements
                 */
                j--;
                arr.length--;
            }
        }
        }
    return arr
}


console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))