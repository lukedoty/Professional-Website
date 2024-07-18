const navLinks = Array.from(document.querySelectorAll("header nav a.nav-link"));

window.onload = updateNavbar(window.location.toString());

(function(history){
    var pushState = history.pushState;
    history.pushState = function() {
        updateNavbar(arguments[2]);
        return pushState.apply(history, arguments);
    };
})(window.history);

window.addEventListener('popstate', function(event) {
    updateNavbar(window.location.toString());
});

function updateNavbar(location) {
    if (!location) location = window.location.toString();

    for(nl of navLinks) {
        nl.classList.remove("selected");
    }

    const route = navLinks.find(e => e.href === location);
    if (route) {
        route.classList.add("selected");
    }
}