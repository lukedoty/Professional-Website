document.addEventListener("click", function(event) {
    let navLink = event.target.closest("header nav a.nav-link");
    if (!navLink) return;

    for(nl of navLink.parentElement.children) {
        nl.classList.remove("selected");
    }
    
    navLink.classList.add("selected");
});