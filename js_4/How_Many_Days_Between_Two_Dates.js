/**
 * @description Function takes two dates and returns the number of days between the first and second date.
 * @param {*string} date1 
 * @param {*string} date2 
 * @returns {*number}
 */
function getDays(date1, date2) {
    /**
     * Getting difference in milliseconds 
     */
    let Diff_In_Milliseconds = date2.getTime() - date1.getTime();
    /**
     * Divding difference in milliseconds to milliseconds of one day to get number of days
     */
    let Diff_In_Days = Diff_In_Milliseconds / (1000 * 3600 * 24);

    return Diff_In_Days
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
))

console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
))

console.log(getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
))

