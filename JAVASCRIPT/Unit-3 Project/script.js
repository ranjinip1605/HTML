// Welcome Message (Shows only once per page load)
window.onload = function () {
    console.log("Welcome to Spice Delight Restaurant!");
};

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Show Today's Special
function showSpecial() {
    alert("🔥 Today's Special: Chicken Biryani with Free Dessert!");
}
