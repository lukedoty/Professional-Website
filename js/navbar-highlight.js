const navLinks = Array.from(document.querySelectorAll("header nav a.nav-link"));

window.onload = updateNavbar(window.location.toString());

window.navigation.addEventListener("navigate", (event) => {
    updateNavbar(event.destination.url);
});

function updateNavbar(location) {
    for(nl of navLinks) {
        nl.classList.remove("selected");
    }

    const route = navLinks.find(e => e.href === location);
    if (route) {
        route.classList.add("selected");
    }
}