const createMenu = () =>{
    const menu = document.createElement('div')
    menu.classList.add('menu')

    menu.appendChild(createMenuItem('Curry', 'A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumin, coriander, cinnamon, and cardamom.'))
    menu.appendChild(createMenuItem('Rice', 'The Hainanese chicken rice is a dish that consists of succulent steamed white chicken cut into bite-size pieces and served on fragrant rice with some light soy sauce. The dish is topped with sprigs of coriander leaf and sesame oil, and accompanied by a garlic-chilli dip.'))
    menu.appendChild(createMenuItem('Sushi', 'A staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.'))
    menu.appendChild(createMenuItem('Chicken', 'Chicken prepared as food by roasting whether in a home kitchen, over a fire, or with a rotisserie (rotary spit)'))

    return menu
}


const createMenuItem = (foodName, description) =>{
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const title = document.createElement('h4')
    title.textContent = foodName

    const foodPicture = document.createElement('img')
    foodPicture.src = `./img/food/${foodName.toLowerCase()}.jpg`
    foodPicture.alt = `${foodName} picture`

    const foodDescription = document.createElement('h5')
    foodDescription.textContent = description

    menuItem.appendChild(title)
    menuItem.appendChild(foodPicture)
    menuItem.appendChild(foodDescription)

    return menuItem
}

const loadMenu = () =>{
    const main = document.querySelector('main')
    main.textContent = ''
    main.appendChild(createMenu())
}

export default loadMenu