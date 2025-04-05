// function loadNav() {
//   fetch('/components/nav.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("nav-placeholder").innerHTML = data;
//       setupMenuToggle(); //Call function to set up the menu toggle and event listeners
//     })
//     .catch(error => console.error('Error loading navigation bar', error));
// }

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const dropdown = document.querySelectorAll(".dropdown"); // Selects multiple dropdowns


  // Toggle main menu on mobile
  menuToggle.addEventListener("click", function () {
    console.log("Menu button clicked!"); // Debugging
    navMenu.classList.toggle("show");

    // If menu is being closed, also close dropdown and submenus
    if (!navMenu.classList.contains("show")) {
      dropdown.forEach(drop => drop.classList.remove("active"));
    }
  });

  // Toggle each dropdown menu on click
dropdown.forEach(currentDrop => {
  currentDrop.addEventListener("click", function (event) {
    event.stopPropagation();

    // Close all other dropdowns
    dropdown.forEach(otherDrop => {
      if (otherDrop !== currentDrop) {
        otherDrop.classList.remove("active");
      }
    });

    // Toggle the clicked one
    currentDrop.classList.toggle("active");
  });
});

  // Close menus when clicking outside
  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("show");
      dropdown.forEach(drop => drop.classList.remove("active"));
    }
  });
});

// After the DOM has loaded all the HTML, the loadNav function is called
// document.addEventListener("DOMContentLoaded", loadNav);