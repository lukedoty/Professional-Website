import { PageContainer } from "./page-container.js";

const pageContainer = document.getElementById("main-page-container");

//https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh

const routes = {
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
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

async function locationHandler() {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the urlRoutes object
    const route = routes[location] || routes["404"];
    console.log(route.pagePath);

    await pageContainer.goToPage(route.pagePath);

    // set the title of the document to the title of the route
    document.title = "Luke Doty | " + route.title;
}

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();



