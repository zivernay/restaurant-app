// create an article element and add it to deals section
function parseDealInfo(data=null){
    const articleHeader = "Wings";
    const articleInformation = "12 Grilled wings with spices and a hot sauce";
    const articleFoooter = "price ";
    const className = "featured";
    return {articleHeader, articleInformation, articleFoooter, className};
}
function getDealMarkUp(info) {
    const articleMarkUp = 
    `<header class="deal-title">${info.articleHeader}</header>
     <p class="deal-description">${info.articleInformation}</p>
     <footer class="deal-summary">${info.articleFoooter}</footer>
    `;
    return articleMarkUp;
}
function createDealElement(dealData){
    const dealElement = document.createElement("article");
    const dealInfo = parseDealInfo(dealData);
    const markUp = getDealMarkUp(dealInfo); // Info is parsed data
    dealElement.innerHTML = markUp;
    dealElement.classList.add(dealInfo.className);
    return dealElement;
}

function showHomepage() {
    const dealsContainer = document.querySelector("#offers");
    dealsContainer.innerHTML = ""; // clearing the container everytime
    const generatedContent = document.createElement("div");
    generatedContent.setAttribute("id", "featured-offers")
    for(i=0; i<4; i++) {
        const dealElement = createDealElement(1);
        if(dealElement.classList.contains("featured")){
            generatedContent.appendChild(dealElement);
        }    
    dealsContainer.appendChild(generatedContent);
    }
}
function showMenu() {
    const dealsContainer = document.querySelector("#offers");
    dealsContainer.innerHTML = "";
    const generatedContent = document.createElement("div");
    generatedContent.setAttribute("id", "offer-list");
    for(i=0; i<9; i++) {
        const dealElement = createDealElement(1);    
        generatedContent.appendChild(dealElement);
    }
    dealsContainer.appendChild(generatedContent);
}
function showContactInformation() {
    const dealsContainer = document.querySelector("#offers");
    dealsContainer.innerHTML = "";
    const generatedContent = document.createElement("div");
    generatedContent.setAttribute("id", "contact-information");
    const addressElement = document.createElement("address");
    const instructions = document.createElement("p");
    instructions.innerHTML = `To place an order:`;
    addressElement.innerHTML = `
        call us <a href="tel:+9188598670">(918) 859 86-70</a><br>
        or <br>
        email us <a href="mailto:order@restaurant.com">order@mail.com</a><br>
        or <br>
        visit any of our store:
            23 Main Street, City 1 <br>
            2 Priafgal av., City 1 <br>
            CityMall 6. building 2, City 3<br>`;
    generatedContent.appendChild(instructions);
    generatedContent.appendChild(addressElement);
    dealsContainer.appendChild(generatedContent);
}

// Events 
const homeTab = document.querySelector("#home-tab");
homeTab.addEventListener("click", (e)=> {
    showHomepage();
});
const menuTab = document.querySelector("#menu-tab");
menuTab.addEventListener("click", ()=> {
    showMenu();
});
const contactInformationTab =  document.querySelector("#contacts-tab");
contactInformationTab.addEventListener("click", ()=>{
    showContactInformation();
})