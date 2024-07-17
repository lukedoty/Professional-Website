document.querySelector('header nav a.nav-link[href="' + window.location.pathname + '"]').classList.add("selected");
const navLinks = document.querySelectorAll("header nav a.nav-link");

document.addEventListener("click", function(event) {
    let navLink = event.target.closest("a.nav-link");
    if (!navLink) return;

    for(nl of navLinks) {
        nl.classList.remove("selected");
    }

    const route = Array.from(navLinks).find(e => e.href === navLink.href);
    if (route) {
        route.classList.add("selected");
    }
});