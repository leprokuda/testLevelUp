const btn = document.querySelector('.anchor__btn')


btn.addEventListener('click', function (e) {
    e.preventDefault()
    const orderSection = document.querySelector('.order')
    const topOffset = document.querySelector('.header').offsetHeight
    const elPosition = orderSection.getBoundingClientRect().top
    const offsetPosition = elPosition -topOffset

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    })
})