function findBrokenKeys(str1, str2) {
    let count = 0;
    let result = [];
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
        result.push(str1[i]);
        }
    }
    return [...new Set(result)];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
console.log(findBrokenKeys("beethoven", "affthoif5"))
console.log(findBrokenKeys("beethoven", "affthoif5"))
