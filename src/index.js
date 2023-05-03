//import "./styles/reset.css";
import "./styles/normalise.css";
import "./styles/main.css";


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
function createDealElement(id){
    const li = document.createElement("li");
    const dealTemp = document.querySelector(".deal.template");
    const deal = dealTemp.cloneNode(true);
    deal.classList.remove("template");
    deal.setAttribute("data-id", id);
    li.appendChild(deal);
    return li;
}

function showHomepage() {
    const header = document.querySelector("#header");
    const dealsContainer = document.querySelector("#offers");
    const featured = document.querySelector(".template.featured");
    const intro = document.querySelector(".intro");
    intro.classList.remove("hidden");
    header.classList.remove("hidden");
    dealsContainer.innerHTML = ""; // clearing the container everytime
    const clonedFeatured = featured.cloneNode(true);
    clonedFeatured.classList.remove(...["hidden", "template"]);
    dealsContainer.appendChild(clonedFeatured);
}

function showMenu() {
    const dealsContainer = document.querySelector("#offers");
    const menuTemp = document.querySelector("#menu");
    const deals = document.querySelector(".menu-items");
    const intro = document.querySelector(".intro");
    intro.classList.add("hidden");
    dealsContainer.innerHTML = ""; 
    for(let i=0; i<9; i++) {
        const deal = createDealElement(i);    
        deals.appendChild(deal);
    }
    const menu = menuTemp.cloneNode(true);
    dealsContainer.appendChild(menu);
}

function showContactInformation() {
    const dealsContainer = document.querySelector("#offers");
    dealsContainer.innerHTML = "";
    const intro = document.querySelector(".intro");
    intro.classList.add("hidden");
    const contactTemp = document.querySelector(".contact.template");
    const contact = contactTemp.cloneNode(true);
    contact.classList.remove("template");
    dealsContainer.appendChild(contact);
}

// Events 
document.body.onload = showHomepage();
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
