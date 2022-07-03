function uncensor(str1, str2) {
    let count = 0;
    let result = [];
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] == "*") {
            result.push(str2[count++]);
        } else {
            result.push(str1[i]);
        }
    }
    return result.join("");
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"))
