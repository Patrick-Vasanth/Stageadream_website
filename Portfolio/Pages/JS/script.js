"use strict";

// NavBar active

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".nav-list li");

  // Function to set the active menu item based on the current URL
  function setActiveMenuItem() {
    const currentURL = window.location.href;

    menuItems.forEach((item) => {
      const menuItemLink = item.querySelector("a");
      if (currentURL === menuItemLink.href) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // Initially set the active menu item
  setActiveMenuItem();
});

// scroll to give navbar background

$(document).ready(function () {
  $(window).bind("scroll", function () {
    var gap = 75;
    if ($(window).scrollTop() > gap) {
      $(".nav-menu").addClass("scrollActive");
    } else {
      $(".nav-menu").removeClass("scrollActive");
    }
  });
});
