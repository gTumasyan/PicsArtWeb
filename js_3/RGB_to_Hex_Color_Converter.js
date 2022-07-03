function hex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r, g, b) {
    return "#" + hex(r) + hex(g) + hex(b)
}

console.log (rgbToHex(0, 128, 192))
console.log (rgbToHex(45, 255, 192))
console.log (rgbToHex(0, 0, 0))