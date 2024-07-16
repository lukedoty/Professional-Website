import { loadPage } from "./page.js";

export class PageContainer extends HTMLElement{
    constructor(startPage) {
        super();
    }

    connectedCallback() {
        var startPage = this.getAttribute("startPage");
        if (startPage) {
            this.goToPage(startPage);
        }
    }

    async goToPage(pageName) {
        const page = await loadPage(pageName);
        while (this.firstChild) {
            this.removeChild(appContainer.firstChild);
        }
        this.appendChild(page.html);
    }
}

export const registerPageContainer = () => customElements.define("page-container", PageContainer);