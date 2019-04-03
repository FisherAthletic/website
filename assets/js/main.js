// Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon
function addResponsive() {
    var x = document.getElementById("topNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }