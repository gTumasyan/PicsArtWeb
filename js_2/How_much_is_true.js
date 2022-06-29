/**
 * @description Function returns the number of true values there are in an array.
 * @param {Array} array 
 * @returns Number : number of true values.
 */

function countTrue(arr){
    if(arr.length==0)
        return 0
    
    const isBelowThreshold = (currentValue) => currentValue === true || currentValue === false;
    if(arr.every(isBelowThreshold) === true){
        let k = 0;
            for(let i = 0; i<arr.length; i++) {
            if(arr[i] === true) {
                k++
            }
        }
        return k
    } 	
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))