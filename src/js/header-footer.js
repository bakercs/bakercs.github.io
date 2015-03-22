// header-footer.js
// This is a simple dependancy that adds in the header and footer in their
// respective locations in the DOM.
// (`<header>`, and `<footer>`, respectively)
$(document).ready(function() {

  // get current location
  currentLocation = location.pathname.split("/").slice(1).join("/");

  // add partial header, footer, and other partial stuff to the DOM
  $.each(["header", "footer"], function(ct, name) {
    $.get("/partials/"+name+".html", function(data) {

      // add the partial code piece to the correct location
      $(data).appendTo(name);

      // some header specific code
      // update the navbar header "active" property for the navbar
      name === "header" &&
      $("#bakercs-navbar .navbar-nav li").each(function(ct, item) {
        if (
          $(item).data("page") === currentLocation ||
          $(item).data("page").replace("index.html", "") === currentLocation
        ) $(item).addClass("active");
      });


    });
  });

});
