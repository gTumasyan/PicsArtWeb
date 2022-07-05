/**
 * @description You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
                Function gets the name of the piece of jewelry with the **highest price** and returns "The most expensive one is the {name of jewelry piece}".
 * @param {object} obj 
 * @returns object-key
 */

function mostExpensive(obj) {
    /**
     * Taking vlues of object as array
     */
    let values = Object.values(obj); 
    /**
     * Finding the max of values
     */  
    let max = Math.max(...values);
    /**
     * Returning the key of max value
     */
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
