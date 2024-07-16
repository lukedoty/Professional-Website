import { loadPage } from "./page.js";

export class PageContainer extends HTMLElement{
    constructor() {
        super();

        this.m_currentPage;
    }

    async goToPage(pagePath) {
        const page = await loadPage(pagePath);

        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild(page.html);
    }

    get currentPage() {
        return this.m_currentPage;
    }
}

export const registerPageContainer = () => customElements.define("page-container", PageContainer);