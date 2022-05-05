console.log('Hello from /pages/ganh-da-dia/script.js');



function myFunction() {
    var x = document.getElementById("menu-nav");
    if (x.className === "header-center") {
        x.className += "responsive";
    } else {
        x.className = "header-center";
    }
}