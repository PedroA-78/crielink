window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    const menu = document.querySelector(".header_menu")
    const nav = document.querySelector(".header_nav")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    const menuLinks = [
        menu,
        ...document.querySelectorAll(".header_nav_link"),
        document.querySelector('.header_cta')
    ]

    const interaction = () => {
        if (getComputedStyle(menu).getPropertyValue('display') == "flex") {
            header.classList.toggle('active')
            nav.classList.toggle('active')
        }
    }

    menuLinks.forEach(link => {
        link?.addEventListener('click', interaction)
    })
})
