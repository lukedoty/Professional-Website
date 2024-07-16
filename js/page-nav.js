import { PageContainer } from "./page-container.js";

const pageContainer = document.getElementById("main-page-container");

//URL routing adapted from:
//https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh

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

document.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("nav a")) return;
    event.preventDefault();
    navigate(event);
});

async function navigate(event) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }

    const page = pages[location] || pages["404"];
    await pageContainer.goToPage(page.pagePath);
    document.title = "Luke Doty | " + route.title;
};

window.onpopstate = locationHandler;
window.route = navigate;
locationHandler();



