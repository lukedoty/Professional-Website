import { PageContainer } from "./page-container.js";

const pageContainer = document.getElementById("main-page-container");

const pages = {
    404: {
        pagePath: "../pages/404.html",
        title: "404",
    },
    "/": {
        pagePath: "../pages/home.html",
        title: "Home",
    },
    "/portfolio": {
        pagePath: "../pages/portfolio.html",
        title: "Portfolio",
    }
};

// create document click that watches the nav links only
document.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("nav a")) return;
    event.preventDefault();
    route(event);
});

function route(event) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    pageHandler();
};

async function pageHandler() {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }

    const page = pages[location] || pages["404"];
    await pageContainer.goToPage(page.pagePath);
    document.title = "Luke Doty | " + page.title;
}

window.onpopstate = pageHandler;
window.route = route;
pageHandler();



