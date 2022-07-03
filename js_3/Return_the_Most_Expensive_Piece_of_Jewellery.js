function mostExpensive(obj) {

    let values = Object.values(obj);
    
    let max = Math.max(...values);
    
    return Object.keys(obj).find(key => obj[key] === max);
}

console.log(mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}))

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
}))
