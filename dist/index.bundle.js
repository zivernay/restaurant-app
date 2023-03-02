/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QyxtQ0FBbUMsWUFBWTtBQUMvQyxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLO0FBQ2Q7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZSBhbiBhcnRpY2xlIGVsZW1lbnQgYW5kIGFkZCBpdCB0byBkZWFscyBzZWN0aW9uXG5mdW5jdGlvbiBwYXJzZURlYWxJbmZvKGRhdGE9bnVsbCl7XG4gICAgY29uc3QgYXJ0aWNsZUhlYWRlciA9IFwiV2luZ3NcIjtcbiAgICBjb25zdCBhcnRpY2xlSW5mb3JtYXRpb24gPSBcIjEyIEdyaWxsZWQgd2luZ3Mgd2l0aCBzcGljZXMgYW5kIGEgaG90IHNhdWNlXCI7XG4gICAgY29uc3QgYXJ0aWNsZUZvb290ZXIgPSBcInByaWNlIFwiXG4gICAgcmV0dXJuIHthcnRpY2xlSGVhZGVyLCBhcnRpY2xlSW5mb3JtYXRpb24sIGFydGljbGVGb29vdGVyfTtcbn1cbmZ1bmN0aW9uIGdldERlYWxNYXJrVXAodGl0bGUsIGRlc2NyaXB0aW9uLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgYXJ0aWNsZU1hcmtVcCA9IFxuICAgIGA8aGVhZGVyIGNsYXNzPVwiZGVhbC10aXRsZVwiPiR7dGl0bGV9PC9oZWFkZXI+XG4gICAgIDxwIGNsYXNzPVwiZGVhbC1kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICA8Zm9vdGVyIGNsYXNzPVwiZGVhbC1zdW1tYXJ5XCI+JHtzdW1tYXJ5fTwvZm9vdGVyPlxuICAgIGA7XG4gICAgcmV0dXJuIGFydGljbGVNYXJrVXA7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWFsRWxlbWVudChkZWFsRGF0YSl7XG4gICAgY29uc3QgZGVhbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWxzXCIpO1xuICAgIGNvbnN0IGRlYWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgZGVhbEluZm8gPSBwYXJzZURlYWxJbmZvKGRlYWxEYXRhKTtcbiAgICBjb25zdCBtYXJrVXAgPSBnZXREZWFsTWFya1VwKGRlYWxJbmZvLmFydGljbGVIZWFkZXIsIGRlYWxJbmZvLmFydGljbGVJbmZvcm1hdGlvbiwgZGVhbEluZm8uYXJ0aWNsZUZvb290ZXIpO1xuICAgIGRlYWxFbGVtZW50LmlubmVySFRNTCA9IG1hcmtVcDtcbiAgICBkZWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFsRWxlbWVudCk7XG59XG5mb3IoaT0wOyBpPDU7IGkrKykge1xuICAgIGNyZWF0ZURlYWxFbGVtZW50KDEpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==