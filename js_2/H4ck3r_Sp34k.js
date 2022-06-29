/**
 * @description Function a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. It's replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.
 * @param {String} str 
 * @returns String : return same string with replaced elements
 */
function hackerSpeak(str) {
    return str.replaceAll('a', '4')
    .replaceAll('e', '3')
    .replaceAll('i', '1')
    .replaceAll('o', '0')
    .replaceAll('s', '5')
}

console.log(hackerSpeak("javascript is cool"))
console.log(hackerSpeak("programming is fun"))
console.log(hackerSpeak("become a coder"))