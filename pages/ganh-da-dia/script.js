console.log('Hello from /pages/ganh-da-dia/script.js');



// Hide responsive menu on clicking anywhere except for header
document.onclick = function (event) {
  // (1#) Detect the clicked element            
  // (2#) Check if it has class 'header-center__submenu-indicator'
  // (3#) If yes, ignore the hiding action       
  const clickedElement = event.target; // (#1)
  const check = clickedElement.classList.contains('header__center__submenu-indicator'); // (#2)
  if (check === true)
    return; // ignore the remaining codes

  // Menu nav (center div)
  const x = document.getElementById("menu-nav");
  x.className = "header__center";
} // document.onclick

function myFunction() {
  var x = document.getElementById("menu-nav");
  if (x.className === "header__center") {
    x.className += "responsive";
  } else {
    x.className = "header__center";
  }

  // Prevent event fired to the parent (document)
  event.stopPropagation();
}