// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let topicsArray = []
const tabsInsert = document.querySelector('.topics')
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then (response => {
        topicsArray = response.data.topics
        return 
    })
    .then (() => {
        topicsArray.forEach( topicName => {
            tabsInsert.appendChild(Tab(topicName))
        })
    })
    .catch(err => console.log(err))

function Tab(name) {
    const topDiv = document.createElement('div')
    topDiv.classList.add('tab')
    topDiv.textContent=name

    return topDiv
}
