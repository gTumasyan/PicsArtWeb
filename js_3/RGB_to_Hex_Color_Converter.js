/**
 * @description taking as parametr arguments of rgbToHex function and converting them to 16bit 
 * @param {number} c 
 * @returns string
 */
function hex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex
}
/**
 * @description Function converts color in RGB format to Hex format. 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns string
 */
function rgbToHex(r, g, b) {
    return "#" + hex(r) + hex(g) + hex(b)
}

console.log (rgbToHex(0, 128, 192))
console.log (rgbToHex(45, 255, 192))
console.log (rgbToHex(0, 0, 0))