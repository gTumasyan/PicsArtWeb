const burger = document.getElementById('burger')

burger.addEventListener('click', () => {
    if (burger.classList.contains('toggle--button')) {
        burger.classList.add('active')
        burger.classList.remove('toggle--button')
    } else {
        burger.classList.add('toggle--button')
        burger.classList.remove('active')
    }
})