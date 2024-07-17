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
    },
    "/portfolio/project1": {
        pagePath: "../pages/portfolio/project1.html",
        title: "Project 1",
    }
};

document.addEventListener("click", function(event) {
    let navLink = event.target.closest("#nav-link");
    if (!navLink) return;
    event.preventDefault();
    route(navLink);
});

function route(navLink) {
    window.history.pushState({}, "", navLink.href);
    pageHandler();
};

async function pageHandler() {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }

    console.log(location);
    console.log(pages[location]);
    const page = pages[location] || pages["404"];
    await pageContainer.goToPage(page.pagePath);
    document.title = "Luke Doty | " + page.title;
}

window.onpopstate = pageHandler;
window.route = route;
pageHandler();



