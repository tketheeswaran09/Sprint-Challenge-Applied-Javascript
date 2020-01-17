// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const insertCards = document.querySelector('.cards-container')
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data)
        const articlesObj = response.data.articles
        return articlesObj
    })
    .then(articles => {
        const articlesObj = []
        const jsArticle = articles['javascript']
        articlesObj.push(jsArticle)
        const bsArticle = articles.bootstrap
        articlesObj.push(bsArticle)
        const jqueryArticle = articles.jquery
        articlesObj.push(jqueryArticle)
        const nodeArticle = articles.node
        articlesObj.push(nodeArticle)
        const techArticle = articles.technology
        articlesObj.push(techArticle)
        return articlesObj
    })
    .then(articles => {
        articles.forEach(articleSet => {
            articleSet.forEach(article => {
                insertCards.appendChild(CreateCard(article));
            });

        });
    })
    .catch(err => console.log(err))

function CreateCard(obj) {
    const topDiv = document.createElement('div')
    const headlineDiv = topDiv.appendChild(document.createElement('div'))
    const authorDiv = topDiv.appendChild(document.createElement('div'))
    const imageContainer = authorDiv.appendChild(document.createElement('div'))
    const span = authorDiv.appendChild(document.createElement('span'))
    const image = imageContainer.appendChild(document.createElement('img'))

    topDiv.classList.add('card')
    headlineDiv.classList.add('headerline')
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')
    image.src = obj.authorPhoto
    headlineDiv.textContent = obj.headline
    span.textContent = obj.authorName

    return topDiv
}