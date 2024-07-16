import { loadPage } from "./page.js";

export class PageContainer extends HTMLElement{
    constructor() {
        super();

        this.m_currentPage;
    }

    connectedCallback() {
        const startPage = this.getAttribute("startPage");
        if (startPage) {
            this.goToPage(startPage);
        }
    }

    async goToPage(pageName) {
        const page = await loadPage(pageName);


        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild(page.html);
        this.m_currentPage = page.title;
    }

    get currentPage() {
        return this.m_currentPage;
    }
}

export const registerPageContainer = () => customElements.define("page-container", PageContainer);