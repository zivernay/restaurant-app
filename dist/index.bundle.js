/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
console.log("It ran!");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUI7QUFDckQsbUNBQW1DLHdCQUF3QjtBQUMzRCxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2ViLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjcmVhdGUgYW4gYXJ0aWNsZSBlbGVtZW50IGFuZCBhZGQgaXQgdG8gZGVhbHMgc2VjdGlvblxuZnVuY3Rpb24gcGFyc2VEZWFsSW5mbyhkYXRhPW51bGwpe1xuICAgIGNvbnN0IGFydGljbGVIZWFkZXIgPSBcIldpbmdzXCI7XG4gICAgY29uc3QgYXJ0aWNsZUluZm9ybWF0aW9uID0gXCIxMiBHcmlsbGVkIHdpbmdzIHdpdGggc3BpY2VzIGFuZCBhIGhvdCBzYXVjZVwiO1xuICAgIGNvbnN0IGFydGljbGVGb29vdGVyID0gXCJwcmljZSBcIjtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBcImZlYXR1cmVkXCI7XG4gICAgcmV0dXJuIHthcnRpY2xlSGVhZGVyLCBhcnRpY2xlSW5mb3JtYXRpb24sIGFydGljbGVGb29vdGVyLCBjbGFzc05hbWV9O1xufVxuZnVuY3Rpb24gZ2V0RGVhbE1hcmtVcChpbmZvKSB7XG4gICAgY29uc3QgYXJ0aWNsZU1hcmtVcCA9IFxuICAgIGA8aGVhZGVyIGNsYXNzPVwiZGVhbC10aXRsZVwiPiR7aW5mby5hcnRpY2xlSGVhZGVyfTwvaGVhZGVyPlxuICAgICA8cCBjbGFzcz1cImRlYWwtZGVzY3JpcHRpb25cIj4ke2luZm8uYXJ0aWNsZUluZm9ybWF0aW9ufTwvcD5cbiAgICAgPGZvb3RlciBjbGFzcz1cImRlYWwtc3VtbWFyeVwiPiR7aW5mby5hcnRpY2xlRm9vb3Rlcn08L2Zvb3Rlcj5cbiAgICBgO1xuICAgIHJldHVybiBhcnRpY2xlTWFya1VwO1xufVxuZnVuY3Rpb24gY3JlYXRlRGVhbEVsZW1lbnQoZGVhbERhdGEpe1xuICAgIGNvbnN0IGRlYWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgZGVhbEluZm8gPSBwYXJzZURlYWxJbmZvKGRlYWxEYXRhKTtcbiAgICBjb25zdCBtYXJrVXAgPSBnZXREZWFsTWFya1VwKGRlYWxJbmZvKTsgLy8gSW5mbyBpcyBwYXJzZWQgZGF0YVxuICAgIGRlYWxFbGVtZW50LmlubmVySFRNTCA9IG1hcmtVcDtcbiAgICBkZWFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRlYWxJbmZvLmNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRlYWxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzaG93SG9tZXBhZ2UoKSB7XG4gICAgY29uc3QgZGVhbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29mZmVyc1wiKTtcbiAgICBkZWFsc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBjbGVhcmluZyB0aGUgY29udGFpbmVyIGV2ZXJ5dGltZVxuICAgIGNvbnN0IGdlbmVyYXRlZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdlbmVyYXRlZENvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmZWF0dXJlZC1vZmZlcnNcIilcbiAgICBmb3IoaT0wOyBpPDQ7IGkrKykge1xuICAgICAgICBjb25zdCBkZWFsRWxlbWVudCA9IGNyZWF0ZURlYWxFbGVtZW50KDEpO1xuICAgICAgICBpZihkZWFsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmZWF0dXJlZFwiKSl7XG4gICAgICAgICAgICBnZW5lcmF0ZWRDb250ZW50LmFwcGVuZENoaWxkKGRlYWxFbGVtZW50KTtcbiAgICAgICAgfSAgICBcbiAgICBkZWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZWRDb250ZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBjb25zdCBkZWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2ZmZXJzXCIpO1xuICAgIGRlYWxzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgZ2VuZXJhdGVkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2VuZXJhdGVkQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9mZmVyLWxpc3RcIik7XG4gICAgZm9yKGk9MDsgaTw5OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVhbEVsZW1lbnQgPSBjcmVhdGVEZWFsRWxlbWVudCgxKTsgICAgXG4gICAgICAgIGdlbmVyYXRlZENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVhbEVsZW1lbnQpO1xuICAgIH1cbiAgICBkZWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZWRDb250ZW50KTtcbn1cbmZ1bmN0aW9uIHNob3dDb250YWN0SW5mb3JtYXRpb24oKSB7XG4gICAgY29uc3QgZGVhbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29mZmVyc1wiKTtcbiAgICBkZWFsc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGdlbmVyYXRlZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdlbmVyYXRlZENvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWluZm9ybWF0aW9uXCIpO1xuICAgIGNvbnN0IGFkZHJlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIik7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW5zdHJ1Y3Rpb25zLmlubmVySFRNTCA9IGBUbyBwbGFjZSBhbiBvcmRlcjpgO1xuICAgIGFkZHJlc3NFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgY2FsbCB1cyA8YSBocmVmPVwidGVsOis5MTg4NTk4NjcwXCI+KDkxOCkgODU5IDg2LTcwPC9hPjxicj5cbiAgICAgICAgb3IgPGJyPlxuICAgICAgICBlbWFpbCB1cyA8YSBocmVmPVwibWFpbHRvOm9yZGVyQHJlc3RhdXJhbnQuY29tXCI+b3JkZXJAbWFpbC5jb208L2E+PGJyPlxuICAgICAgICBvciA8YnI+XG4gICAgICAgIHZpc2l0IGFueSBvZiBvdXIgc3RvcmU6XG4gICAgICAgICAgICAyMyBNYWluIFN0cmVldCwgQ2l0eSAxIDxicj5cbiAgICAgICAgICAgIDIgUHJpYWZnYWwgYXYuLCBDaXR5IDEgPGJyPlxuICAgICAgICAgICAgQ2l0eU1hbGwgNi4gYnVpbGRpbmcgMiwgQ2l0eSAzPGJyPmA7XG4gICAgZ2VuZXJhdGVkQ29udGVudC5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGdlbmVyYXRlZENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0VsZW1lbnQpO1xuICAgIGRlYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlZENvbnRlbnQpO1xufVxuXG4vLyBFdmVudHMgXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLXRhYlwiKTtcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICBzaG93SG9tZXBhZ2UoKTtcbn0pO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS10YWJcIik7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBzaG93TWVudSgpO1xufSk7XG5jb25zdCBjb250YWN0SW5mb3JtYXRpb25UYWIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0cy10YWJcIik7XG5jb250YWN0SW5mb3JtYXRpb25UYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgc2hvd0NvbnRhY3RJbmZvcm1hdGlvbigpO1xufSlcbmNvbnNvbGUubG9nKFwiSXQgcmFuIVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=