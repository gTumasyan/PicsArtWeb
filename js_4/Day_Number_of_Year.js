/**
 * @description Given a string `date`representing a Gregorian calendar date formatted as `month/day/year`, return the *day-number* of the year.
 * @param {*string} date 
 * @returns {*string}
 */
function dayOfYear(date){
    /**
     * Getting the current given day
     */
    let now = new Date(date);
    /**
     * Getting the current given yaer
     */
    let start = new Date(now.getFullYear(), 0, 0);
    /**
     * Getting differnce between them in milliseconds
     */
    let diff = now - start;
    /**
     * One day in milliseconds
     */
    let oneDay = 1000 * 60 * 60 * 24;
    /**
     * Dividing days to one day's milliseconds to get number of days
     */
    let day = Math.floor(diff / oneDay);
    
    return 'Day of year: ' + day;
}

console.log(dayOfYear("12/13/2020"))
console.log(dayOfYear("12/17/2020"))
console.log(dayOfYear("11/16/2020"))
console.log(dayOfYear("1/9/2019"))
console.log(dayOfYear("3/1/2004"))
console.log(dayOfYear("12/31/2000"))