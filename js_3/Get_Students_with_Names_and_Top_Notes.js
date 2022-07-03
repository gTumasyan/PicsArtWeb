function getStudentsWithNamesAndTopNotes(obj) {
        for(const i in obj) {
        obj[i].topNote = Math.max(...obj[i].notes)
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