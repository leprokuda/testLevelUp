document.addEventListener('DOMContentLoaded', function() {


  // Выпадающее меню при клике на бургер

  const iconBurger = document.querySelector('.header__burger')
  const menuNav = document.querySelector('.header__nav')

  if (iconBurger) {
    iconBurger.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock')
      iconBurger.classList.toggle('_active')
      menuNav.classList.toggle('_active')
    })
  }


  // Прокрутка к разделу при клике раздела меню

  const menuLinks = document.querySelectorAll('.header__link[data-goto]')

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const menuLink = e.target
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight
        
        // Убираем меню при нажатии на раздел

        if (iconBurger.classList.contains('_active')) {
          document.body.classList.remove('_lock')
          iconBurger.classList.remove('_active')
          menuNav.classList.remove('_active')
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        })
        e.preventDefault()
      }
    }
  }
})