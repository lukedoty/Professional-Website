const pageContainer = document.getElementById("main-page-container");
const pageDirectory = (async function() {
    const pdFile = await fetch("/page-directory.json");
    const pdJson = await pdFile.text();
    const pdObject = JSON.parse(pdJson);
    return pdObject;
})();

document.addEventListener("click", function(event) {
    let navLink = event.target.closest(".nav-link");
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

    const resolvedPD = await pageDirectory;
    const page = resolvedPD[location] || resolvedPD["404"];
    await pageContainer.goToPage(page.pagePath);

    document.title = "Luke Doty | " + page.title;
    document.querySelector('meta[name="description"]').setAttribute("content", page.description);
}

window.onpopstate = pageHandler;
window.route = route;
pageHandler();



