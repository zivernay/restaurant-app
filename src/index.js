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


// Display intro message in header
// Select and show the featured deal
function showHomepage() {
    // show intro
    const intro = document.querySelector(".intro");
    intro.classList.remove("hidden");
    // Select featured deal
    const index = Math.floor(Math.random() * 10);
    const id = `d${index}`;
    // format featured deal
    const featuredTemp = document.querySelector(".featured.temp"); // use classes to avoid cloning IDs
    const featured = featuredTemp.cloneNode(true);
    const img = featured.querySelector("img");
    img.setAttribute("src", dbResturant[id]["urlImg"]);
    img.setAttribute("alt", dbResturant[id]["desc"]);
    // show featured deal
    const main = document.querySelector("#main");
    main.innerHTML = "";
    main.appendChild(featured);
}

function setDealProp(deal, id){
    const figure = deal.querySelector("figure img");
    figure.setAttribute("src", dbResturant[id]["urlImg"]);
    figure.setAttribute("alt", dbResturant[id]["desc"]);
    return deal;
}

function createDealElement(id){
    const li = document.createElement("li");
    li.setAttribute("data-id", id);
    const dealTemp = document.querySelector(".deal.temp");
    let deal = dealTemp.cloneNode(true);
    deal = setDealProp(deal, id);
    li.appendChild(deal);
    return li;
}

// Display the Restaurant menu by:
//    - showing options
//    - hide intro to create space
function showMenu() {
    // hide intro
    const intro = document.querySelector(".intro");
    intro.classList.add("hidden");
// generate menu options
    const menuTemp = document.querySelector(".menu.temp");
    const menu = menuTemp.cloneNode(true);
    menu.classList.remove("temp");
    const deals = menu.querySelector(".deals.temp");
    for(let i=0; i<10; i++) {
        const deal = createDealElement(`d${i}`);
        deal.addEventListener("click", showSelectedDeal); 
        deals.appendChild(deal);
    }
    //show generated options
    const main = document.querySelector("#main");
    main.innerHTML = "";
    main.appendChild(menu);
}

function showContactInformation() {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    //hide intro
    const intro = document.querySelector(".intro");
    intro.classList.add("hidden");
    const contactTemp = document.querySelector(".contact.temp");
    const contact = contactTemp.cloneNode(true);
    main.appendChild(contact);
}

function showSelectedDeal(){
    const prevSelection = document.querySelector(".starring");
    if (prevSelection) {
        prevSelection.classList.remove("starring");
    }
    const deal = this;
    deal.classList.add("starring");
    const cover = document.querySelector(".cover-img");
    cover.innerHTML = "";
    const id = deal.dataset.id;
    // special displaying layout
    cover.classList.add("selected");
    const img = document.createElement("img");
    img.setAttribute("src", dbResturant[id]["urlImg"]);
    img.setAttribute("alt", dbResturant[id]["desc"]);
    cover.appendChild(img);
    const menu = document.querySelector(".deals");
    menu.classList.add("menu-items")
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
