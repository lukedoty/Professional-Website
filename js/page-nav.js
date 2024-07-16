import { PageContainer } from "./page-container.js";

const pageContainer = document.getElementById("main-page-container");

const navButtons = document.getElementById("page-nav").children;

for (const button of navButtons) {
    button.onclick = function() {
        let page = button.getAttribute("page");
        pageContainer.goToPage(page);
    }
}


