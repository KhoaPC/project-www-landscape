console.log('Hello from /pages/bai-xep/script.js');




function myFunction() {
    var x = document.getElementById("menu-nav");
    if (x.className === "header-center") {
        x.className += "responsive";
    } else {
        x.className = "header-center";
    }
}
