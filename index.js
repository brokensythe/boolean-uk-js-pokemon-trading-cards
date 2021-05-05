// write your code here!
// This variable has the data you're working with

console.log(data);

function cardData () {
    // create required variables for loop
    let pokemonCard = undefined
    let container = undefined
    let cardTitle = undefined
    let cardImage = undefined 
    let cardText = undefined
    let text = undefined 
    
    // loop array of data
    for (let info of data) {
        // creating the elements
        pokemonCard = document.createElement('Article')
        container = document.querySelector(`.cards`)
        cardTitle = document.createElement(`h2`)
        cardImage = document.createElement(`img`)
        cardText = document.createElement(`div`)

        // puts pokemonCard(new/dynamic content) inside container(section with class cards)
        container.append(pokemonCard)

        // adds change to the page
        document.body.append(container)

        // adds a class to the cards
        pokemonCard.setAttribute(`class`, `card`)

        // adds elements to the card
        pokemonCard.append(cardTitle, cardImage, cardText)

        // adds classes to the elements of the card
        cardTitle.setAttribute(`class`, `card--title`)
        cardImage.setAttribute(`class`, `card--img`)
        cardText.setAttribute(`class`, `card--text`)

        // add title and image
        cardTitle.innerText = info.name
        cardImage.src = info.sprites.other["official-artwork"].front_default

        //adds text elements, this information is inside another array so a second inner loop will have to run 
        for (const stat of info.stats) {
            // creates text elements
            text = document.createElement('p')
            // adds elements to div with class card--text
            cardText.append(text)
            // uses two object keys inside stat object to form a string to add to p element
            text.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        }
        
    }
}

cardData()


