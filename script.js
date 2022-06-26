//Special Arrays

/**
 * @description Checking array for being special. Array is special if every even index contains an even number and every odd index contains an odd number.
 * @param {Array} array is taking array
 * @returns {Boolean} is true if array is special 
 */

function isSpecialArray(arr) {
    let i = 0;
    while( i < arr.length) {
        if(arr[i] % 2 == i % 2) {
            i++
            continue
        } else {
            return false
        }
    }
    return true 
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) //true
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) //false
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) //false


//=============================================================================


//Check if All Values Are True

/**
 * Function returns true if all parameters are truthy, and false otherwise. Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
 * @param {any} p1 taking nay parametr
 * @param {any} p2 taking nay parametr. Have default value of true
 * @param {any} p3 taking nay parametr. Have default value of true
 * @returns  Boolean
 */

function allTruthy(p1, p2= true, p3 = true) {
	return (p1 == true && p2 == true && p3 == true ) ? true : false
}

console.log(allTruthy(true, true, true)) // true
console.log(allTruthy(true, false, true)) // false
console.log(allTruthy(5, 4, 3, 2, 1, 0)) // false
console.log(allTruthy(NaN)) //false
console.log(allTruthy("")) //false

//=============================================================================


//Find the Mean of All Digits

/**
 * @description Taking any number and return the mean of all digits. If get 0 return message aksing to input any other number
 * @param {Number} number taking any number
 * @returns {Number} returning mean of all digits
 */

function mean(val) {
    let sum = 0
    let i = 0
    let n
    if(val == 0){
        return "Please write any other number"
    }else if(val < 0){
        return mean(-1 * val)
    }
    else{
        while (val > 0) {
            sum+=(val %10);
            val = Math.floor(val /10);
            i++
        }
    }
    return sum/i
}

// console.log(mean(0)) //Please write any other number
// console.log(mean(-42)) //3
// console.log(mean(42)) //3


//=============================================================================