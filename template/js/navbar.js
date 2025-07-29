const header = document.getElementsByTagName("header")[0];
const nav = document.getElementsByTagName("nav")[0];
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("nav-links");
let open = false;

function openMenu() {
    if (!open) {
        // Open the menu (make it visible)
        header.style.height = "250px";  // Increase header height to fit the mobile menu
        nav.style.border = "block";
        nav.classList.add("open"); // Add class to show mobile menu
        open = true;
    } else {
        // Close the menu (hide it)
        header.style.height = "70px";  // Reset to default height
        nav.style.border = "none";
        nav.classList.remove("open"); // Remove class to hide mobile menu
        open = false;
    }
}
