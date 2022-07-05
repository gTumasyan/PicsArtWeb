/**
 * @description Function takes an array of objects like `{ name: "John", notes: [3, 5, 4] }` and returns an array of objects like `{ name: "John", topNote: 5 }`.
 * @param {Object} obj 
 * @returns object
 */
function getStudentsWithNamesAndTopNotes(obj) {
        for(const i in obj) {
        /**
         * Creating new key "topNote" and giving him max value of key "notes"
         */
        obj[i].topNote = Math.max(...obj[i].notes)
        /**
         * deleteing the key "notes"
         */
        delete obj[i].notes
    }
    return obj
}

console.log(
    getStudentsWithNamesAndTopNotes([
        { "name": "John", "notes": [3, 5, 4] },
        { "name": "Max", "notes": [1, 4, 6] },
        { "name": "Zygmund", "notes": [1, 2, 3] }
    ])
)