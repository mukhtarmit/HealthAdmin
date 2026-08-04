/* ==========================================================================
   app.js — shared behaviour: theme + collapsible sidebar
   Loaded on every page.
   ========================================================================== */

(function () {
  "use strict";

  // Apply saved theme immediately (before paint of dashboard-style pages)
  var THEME_KEY = "healthadmin-theme";
  var savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-pending");
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }

    initSidebar();
    initAvatarInitials();
    initDemoLinks();
  });

  // Sidebar items like Reports / Pharmacy / Finance are out of scope for
  // this capstone build — keep them visible but explain instead of 404-ing.
  function initDemoLinks() {
    document.querySelectorAll("[data-demo]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        alert(link.textContent.trim() + " is a placeholder in this capstone build — not yet implemented.");
      });
    });
  }

  function initSidebar() {
    var toggle = document.querySelector("[data-sidebar-toggle]");
    var sidebar = document.querySelector(".sidebar");
    var scrim = document.querySelector(".scrim");
    if (!toggle || !sidebar) return;

    function open() {
      sidebar.classList.add("open");
      if (scrim) scrim.classList.add("show");
    }
    function close() {
      sidebar.classList.remove("open");
      if (scrim) scrim.classList.remove("show");
    }

    toggle.addEventListener("click", function () {
      sidebar.classList.contains("open") ? close() : open();
    });
    if (scrim) scrim.addEventListener("click", close);

    // Close sidebar automatically after a nav link is tapped on mobile
    sidebar.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", close);
    });
  }

  function initAvatarInitials() {
    document.querySelectorAll("[data-initials]").forEach(function (el) {
      el.textContent = el.getAttribute("data-initials");
    });
  }

  // Exposed so settings.js can flip the theme and persist the choice
  window.HealthAdmin = {
    setTheme: function (isDark) {
      document.body.classList.toggle("dark", isDark);
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    },
    isDark: function () {
      return document.body.classList.contains("dark");
    }
  };
})();
