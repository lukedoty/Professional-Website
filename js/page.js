export async function loadPage(pagePath) {
    const file = await fetch(pagePath);
    const text = await file.text();
    return new Page(text);
}

class Page {
    constructor(text) {
        this.m_text = text;
        this.m_html = document.createElement("div");
        this.m_html.innerHTML = text;
    }

    get text() {
        return this.m_text;
    }

    get html() {
        return this.m_html;
    }
}