export async function loadPage(pageName) {
    const file = await fetch("../pages/" + pageName + ".html");
    const text = await file.text();
    return new Page(text);
}

class Page {
    constructor(text) {
        this.m_text = text;
        this.m_html = document.createElement("div");
        this.m_html.innerHTML = text;
        this.m_title = this.m_html.querySelectorAll("title")[0].innerText;

        console.log("Page created");
    }

    get text() {
        return this.m_text;
    }

    get html() {
        return this.m_html;
    }

    get title() {
        return this.m_title;
    }
}