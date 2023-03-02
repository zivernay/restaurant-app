// create an article element and add it to deals section
function parseDealInfo(data=null){
    const articleHeader = "Wings";
    const articleInformation = "12 Grilled wings with spices and a hot sauce";
    const articleFoooter = "price "
    return {articleHeader, articleInformation, articleFoooter};
}
function getDealMarkUp(title, description, summary) {
    const articleMarkUp = 
    `<header class="deal-title">${title}</header>
     <p class="deal-description">${description}</p>
     <footer class="deal-summary">${summary}</footer>
    `;
    return articleMarkUp;
}
function createDealElement(dealData){
    const dealsContainer = document.querySelector("#deals");
    const dealElement = document.createElement("article");
    const dealInfo = parseDealInfo(dealData);
    const markUp = getDealMarkUp(dealInfo.articleHeader, dealInfo.articleInformation, dealInfo.articleFoooter);
    dealElement.innerHTML = markUp;
    dealsContainer.appendChild(dealElement);
}
for(i=0; i<5; i++) {
    createDealElement(1);
}