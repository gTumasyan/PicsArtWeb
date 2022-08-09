/**
 * @description Given a range of years as a string, return the **number of leap years**
                there are within the range (inclusive). 
 * @param {*string} 
 * @returns {*string}
 */
function numLeapYears(str) {
    /**
     * Getting first date using as number using slice method
     */
    let first =  +str.slice(0, 4)
    /**
     * Getting second date using as number using slice method
     */
    let second = +str.slice(5, 9)
    /**
     * variable to count number of leap years
     */
    let leapYearCount = 0

    /**
     * checking if year is leap and incrementing leapYearCount variable
     */
    while( first <= second){
        if ((0 == first % 4) && (0 != first % 100) || (0 == first % 400)) {
                    leapYearCount++
        }
        first++
    }

    return `Number of leap years is ${leapYearCount}`
}

console.log(numLeapYears("1980-1984"))
console.log(numLeapYears("2000-2020"))
console.log(numLeapYears("1600-2000"))