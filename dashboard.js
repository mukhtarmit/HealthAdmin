/* dashboard.js — subtle count-up animation for stat cards */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var values = document.querySelectorAll(".stat-value");
    values.forEach(function (el, i) {
      el.style.animationDelay = (i * 0.05) + "s";
      el.classList.add("fade-up");
    });
  });
})();
