function makeBox(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i === 1 || i === n){
            arr.push('#'.repeat(n));
        } else {
            arr.push('#' + ' '.repeat(n - 2) + '#')
        }
    }
    return arr;    
}

console.log(makeBox(5))
console.log(makeBox(3))
console.log(makeBox(2))
console.log(makeBox(1))