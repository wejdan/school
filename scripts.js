document.addEventListener("click", function (event) {
  var menu = document.getElementById("hamburger-menu");
  var navList = document.querySelector("nav ul");
  // Check if the clicked target is not the menu and not a descendant of the menu
  if (!menu.contains(event.target)) {
    // Close the menu (you can adjust the code here depending on how you're toggling the menu)
    navList.classList.add("closed"); // Assuming you're using a 'closed' class to collapse the menu
  }
});

document.querySelectorAll("nav ul a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Close the menu
    toggleMenu();

    // Optional: prevent the default action to ensure smooth scrolling behavior
    e.preventDefault();

    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
  });
document.addEventListener("DOMContentLoaded", function () {
  var schoolLocation = [24.46567686593267, 39.54000596931517]; // Example coordinates, replace with actual coordinates of the school
  var map = L.map("map").setView(schoolLocation, 15); // Initialize map with school location and zoom level

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(schoolLocation).addTo(map).bindPopup("<b>مدرسة  شروق العلم</b>"); // Replace with the actual name of the school
});
function toggleMenu() {
  var navList = document.querySelector("nav ul");
  navList.classList.toggle("closed");
}
