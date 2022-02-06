import loadContact from "./Contact"
import loadHome from "./Home"
import loadMenu from "./Menu"
const createHeader = () =>{
    const header = document.createElement('header')
    const headerContent = document.createElement('div')
    headerContent.classList.add('header-content')
    const logo = document.createElement('img')
    const title = document.createElement('h1')
    title.textContent = 'Arcade Restaurant'
    logo.src = "img/icon.png"
    logo.alt = 'restaurant logo'

    headerContent.appendChild(logo)
    headerContent.appendChild(title)
    header.appendChild(headerContent)
    header.appendChild(createNavbar())


    return header
}

const createFooter = () =>{
    const footer = document.createElement('footer')
    footer.classList.add('main-footer')
    footer.textContent = 'Made by @MateoICS'

    return footer
}

const createNavbar = () =>{
    const nav = document.createElement('nav')
    nav.classList.add('main-nav')

    const navWrap = document.createElement('div')
    navWrap.classList.add('nav-wrap')
    

    const home = document.createElement('div')
    home.classList.add('nav-item')
    home.textContent = 'Home'
    home.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return
        setCurrent(home)
        loadHome()
    })

    const menu = document.createElement('div')
    menu.classList.add('nav-item')
    menu.textContent = 'Menu'
    menu.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return
        setCurrent(menu)
        loadMenu()
    })

    const contact = document.createElement('div')
    contact.classList.add('nav-item')
    contact.textContent = 'Contact'
    contact.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return
        setCurrent(contact)
        loadContact()
    })

    navWrap.appendChild(home)
    navWrap.appendChild(menu)
    navWrap.appendChild(contact)

    nav.appendChild(navWrap)


    return nav
}

const createMain = () =>{
    const main = document.createElement('main')
    const content = document.createElement('div')
    content.classList.add('content')

    return main
}

const setCurrent = (selectedPage) =>{
    const items = document.querySelectorAll('.nav-item')

    items.forEach((item)=>{
        if(item !== this){
            item.classList.remove('active')
        }
    })

    selectedPage.classList.add('active')
}

const loadWebsite = () =>{
    const app = document.querySelector('#app')
    app.appendChild(createHeader())
    app.appendChild(createMain())
    app.appendChild(createFooter())

    setCurrent(document.querySelector('.nav-item'))
    loadHome()
}

export default loadWebsite
