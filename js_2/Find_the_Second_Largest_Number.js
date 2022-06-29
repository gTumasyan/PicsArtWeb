/**
 * @description Function takes an array of numbers and returns the second largest number.
 * @param {*} arr 
 * @returns Number : returns  the second largest number
 */

function secondLargest(arr) {
    /**
     * Checking if array has more than 2 elements
     */
    if(arr.length<2){
        return 0
    }
    /**
     * Finding the max
     */
    else {
        let max = arr[0];
        for(i = 1; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        /**
         * Creating new empty array and cloning all elements beside max
         */
        let arr1 = []
        /**
         * Checking if max element is the frist element of array
         */
        if(max = arr[0]) {
            for(let i = 1; i < arr.length; i++) {  
                if(arr[i] !==max) {
                    arr1[i-1] = arr[i]
                }
            }
        }else {
            for(let i = 0; i < arr.length; i++) {  
                if(arr[i] !==max) {
                    arr1[i] = arr[i]
                }
            }
        }
        /**
         * Finding max element of second array
         */
        let Secondmax = arr1[0];
        for(i = 1; i < arr1.length; i++){
            if(Secondmax < arr1[i]){
                Secondmax = arr1[i];
            }
        }
        return Secondmax
    }
}

console.log(secondLargest([40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([54, 23, 11, 17, 10]))
console.log(secondLargest([54, 5]))
console.log(secondLargest([5]))