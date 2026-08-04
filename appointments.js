/* appointments.js — validates and "submits" the booking form */

(function () {
  "use strict";

  var form = document.getElementById("appointmentForm");
  var banner = document.getElementById("successBanner");
  if (!form) return;

  var requiredFields = ["patientName", "doctorSelect", "apptDate", "apptTime"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var missing = requiredFields.filter(function (id) {
      var el = document.getElementById(id);
      return el.value.trim() === "";
    });

    requiredFields.forEach(function (id) {
      var el = document.getElementById(id);
      el.closest(".field").classList.toggle("has-error", missing.indexOf(id) !== -1);
    });

    if (missing.length > 0) {
      banner.classList.remove("show");
      return;
    }

    banner.classList.add("show");
    banner.scrollIntoView({ behavior: "smooth", block: "start" });
    form.reset();
  });
})();
