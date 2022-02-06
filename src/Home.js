const createHome = () =>{
    const container = document.createElement('div')
    container.classList.add('container')

    const pageDescription = document.createElement('h4')
    pageDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, excepturi? Delectus aliquam vitae eius pariatur temporibus reiciendis fugit, amet, rerum molestias aperiam velit est, ipsam et repellat praesentium tempora soluta itaque quod non optio blanditiis! Mollitia, dolor natus quibusdam error porro voluptatibus laborum rem accusantium eos. Assumenda atque dicta dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, excepturi? Delectus aliquam vitae eius pariatur temporibus reiciendis fugit, amet, rerum molestias aperiam velit est, ipsam et repellat praesentium tempora soluta itaque quod non optio blanditiis! Mollitia, dolor natus quibusdam error porro voluptatibus laborum rem accusantium eos. Assumenda atque dicta dignissimos?'

    const chief = document.createElement('img')
    chief.src = './img/chief.jpg'
    chief.alt = 'chief img'

    container.appendChild(pageDescription)
    container.appendChild(chief)

    return container
}

const loadHome = () =>{
    const main = document.querySelector('main')
    main.textContent = ''
    main.appendChild(createHome())
}

export default loadHome