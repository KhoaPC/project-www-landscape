console.log('Hello from /pages/ganh-da-dia/script.js');



// Hide responsive menu on clicking anywhere except for header
document.onclick = function () {
    const x = document.getElementById("menu-nav");
    x.className = "header-center";
  } // document.onclick

  function myFunction() {
    var x = document.getElementById("menu-nav");
    if (x.className === "header-center") {
      x.className += "responsive";
    } else {
      x.className = "header-center";
    }

    // Prevent event fired to the parent (document)
    event.stopPropagation();
  }