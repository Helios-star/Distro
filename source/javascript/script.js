// Global variables
var menu_button = document.getElementById("menu-button");
var hidden_menu = document.querySelector(".hidden-menu");
var dashboard_box = document.getElementById("dashboard-box");
var widget_box = document.getElementById("widget-box");
var create_button = document.getElementById("create");


// Functions
var create_icon = function() {
var icon = document.createElement("div");
icon.classList.add("icon", "box");
dashboard_box.appendChild(icon);
};
// Event listeners
menu_button.addEventListener("click", function(){
    if (hidden_menu.style.display === "block") {
        hidden_menu.style.display = "none";
    } else {
        hidden_menu.style.display = "block";
    }
});

create_button.addEventListener("click", create_icon);