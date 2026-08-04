/* settings.js — tab switching + theme toggle (minimal JS) */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".settings-tab");
    var panels = document.querySelectorAll(".settings-panel");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        panels.forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        document.getElementById("panel-" + tab.dataset.tab).classList.add("active");
      });
    });

    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle && window.HealthAdmin) {
      themeToggle.checked = window.HealthAdmin.isDark();
      themeToggle.addEventListener("change", function () {
        window.HealthAdmin.setTheme(themeToggle.checked);
      });
    }

    var saveProfileBtn = document.getElementById("saveProfileBtn");
    if (saveProfileBtn) {
      saveProfileBtn.addEventListener("click", function () {
        alert("Profile changes saved (demo).");
      });
    }

    var savePasswordBtn = document.getElementById("savePasswordBtn");
    if (savePasswordBtn) {
      savePasswordBtn.addEventListener("click", function () {
        var current = document.getElementById("currentPassword");
        var next = document.getElementById("newPassword");
        var confirm = document.getElementById("confirmPassword");

        if (!current.value || !next.value || !confirm.value) {
          alert("Please fill in every password field.");
          return;
        }
        if (next.value !== confirm.value) {
          alert("New password and confirmation do not match.");
          return;
        }
        alert("Password updated (demo).");
        current.value = next.value = confirm.value = "";
      });
    }
  });
})();
