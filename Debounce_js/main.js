function debounce (func, delay){

    let timeout

    return function (...args) {
        
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout( ()=> {
            func(...args)
        }, delay)
    }
}

search.addEventListener("keyup", debounce((e => {
    console.log(e.target.value)
    e.target.value = ""
}),1000))