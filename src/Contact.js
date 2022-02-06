const createContact = () =>{
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const restaurantData = document.createElement('div')
    restaurantData.classList.add('restaurant-data')


    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = 'Phone number: 992 994 110'

    const email = document.createElement('p')
    email.textContent = 'Email: arcade.restaurant@arcade.com'

    const address = document.createElement('p')
    address.textContent = 'Street: ul.Fredry 13 Poznan'

    const location = document.createElement('img')
    location.classList.add('location-img')
    location.src = 'img/location.jpg'
    location.alt = 'location-picture'

    restaurantData.appendChild(phoneNumber)
    restaurantData.appendChild(email)
    restaurantData.appendChild(address)
    contact.appendChild(location)
    contact.appendChild(restaurantData)
    return contact
}

const loadContact = () =>{
    const main = document.querySelector('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact