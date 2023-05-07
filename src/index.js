//import "./styles/reset.css";
import "./styles/normalise.css";
import "./styles/main.css";
import img_d1  from "./img/31790889_b11.jpg";
import img_d2  from "./img/close-up-view-italian-food-wooden-table.jpg";
import img_d3  from "./img/drawing.svg";
import img_d4  from "./img/fried-meat-ribs-with-vegetables-potatoes.jpg";
import img_d5  from "./img/front-view-long-meat-cutlets-with-lemon-pomegranates.jpg";
import img_d6  from "./img/g11782.svg";
import img_d7  from "./img/grilled-lamb-chop-steak.jpg";
import img_d8  from "./img/high-angle-plate-with-fried-chicken-salad-with-sauce-cutlery.jpg";
import img_d9  from "./img/roasted-meat-with-chopped-vegetables.jpg";
import img_d10 from "./img/top-view-chicken-wings-plate-with-sesame-seeds-copy-space.jpg";
import img_d11 from "./img/topview-served-beef-salad-with-cherry-tomatos-lettuce-white-table.jpg";
import img_d12 from "./img/Untitled.png";


const dbResturant = {
    d0: {urlImg: img_d12,
        desc: "Chekuravidza"},
    d1: {urlImg: img_d1,
        desc: "This the first description"
    },
    d2: {urlImg: img_d2,
        desc: "This the second one"
    },
    d3: {urlImg: img_d3,
        desc: "This the third one"},
    d4: {urlImg: img_d4,
        desc: "Some delicious stuff"},
    d5: {urlImg: img_d5,
        desc: "A nice plate thing"},
    d6: {urlImg: img_d6,
        desc: "A nice spoon"},
    d7: {urlImg: img_d7,
        desc: "Another one!"},
    d8: {urlImg: img_d8,
        desc: "hoza"},
    d9: {urlImg: img_d9,
        desc: "Ka suspensi"},
    d10: {urlImg: img_d10,
        desc: "Now i see what is up"},
    d11: {urlImg: img_d11,
        desc: "Chekuzvimbirisa"}
};

function setDealProp(deal, id){
    deal.setAttribute("data-id", id);
    const figure = deal.querySelector("figure img");
    figure.setAttribute("src", dbResturant[id]["urlImg"]);
    figure.setAttribute("alt", dbResturant[id]["desc"]);
    return deal;
}

function createDealElement(id){
    const li = document.createElement("li");
    const dealTemp = document.querySelector(".deal.template");
    let deal = dealTemp.cloneNode(true);
    deal.classList.remove("template");
    deal = setDealProp(deal, id);
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
    const menu = menuTemp.cloneNode(true);
    const deals = menu.querySelector(".menu-items");
    const intro = document.querySelector(".intro");
    intro.classList.add("hidden");
    dealsContainer.innerHTML = "";
    for(let i=0; i<12; i++) {
        debugger;
        const deal = createDealElement(`d${i}`);    
        deals.appendChild(deal);
    }
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

function showSelectedDeal(deal){
    const prevSelection = document.querySelector(".starring");
    prevSelection.classList.remove(".starring");
    deal.classList.add("starring");
    const diplay = querySelector(".selected figure");
    const id = deal.dataset.id;

    //introduce database dictionary object to store data
    // use data- attributes to index the dictionary and match the selected item details
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
// add listener to display the selected item 
//dealElements = document.querySelectorAll(".deal");
//for(let i=0; i<length(dealElements), i++) {}
