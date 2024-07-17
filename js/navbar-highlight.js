const navLinks = document.querySelectorAll("header nav a.nav-link");
document.querySelector('header nav a.nav-link[href="' + window.location.pathname + '"]').classList.add("selected");

document.addEventListener("click", function(event) {
    let navLink = event.target.closest(".nav-link");
    if (!navLink) return;

    for(nl of navLinks) {
        nl.classList.remove("selected");
    }

    if (navLink.matches("header nav a.nav-link")) {
        navLink.classList.add("selected");
    }else if (navLink.matches("#website-title")) {
        navLinks[0].classList.add("selected");
    }
});