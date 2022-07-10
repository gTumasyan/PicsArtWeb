/**
 * @description Given a Date() object, return the date from three days prior as a string: "2016-01-19".
 * @param {*Number} GetDate 
 * @returns {*String}
 */

function threeDaysAgo(GetDate){
    /**
     * Getting the current given day
     */
	let d = GetDate;
	/**
	 * Setting day to 3 days ago
	 */
    d.setHours(d.getHours() - 72)
	/**
	 * Converting date to string and to format we need by using pasStart method
	 */
	const DATE = d.getDate().toString().padStart(2, "0");
	const MONTH = (d.getMonth()+1).toString().padStart(2, "0");
	const YEAR = d.getFullYear();

	return ` ${YEAR} ${MONTH} ${DATE}`
}

console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)))
console.log(threeDaysAgo(new Date(1965, 3, 15)))