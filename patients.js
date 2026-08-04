/* patients.js — search/filter table + demo row actions */

(function () {
  "use strict";

  var searchInput = document.getElementById("patientSearch");
  var table = document.getElementById("patientsTable");
  if (!searchInput || !table) return;

  var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
  var tbody = table.querySelector("tbody");
  var emptyRow = null;

  function ensureEmptyRow() {
    if (!emptyRow) {
      emptyRow = document.createElement("tr");
      emptyRow.className = "empty-row";
      var td = document.createElement("td");
      td.colSpan = 6;
      td.textContent = "No patients match your search.";
      emptyRow.appendChild(td);
    }
    return emptyRow;
  }

  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    var visibleCount = 0;

    rows.forEach(function (row) {
      var haystack = (row.dataset.name + " " + row.dataset.id + " " + row.dataset.phone).toLowerCase();
      var match = haystack.indexOf(q) !== -1;
      row.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    var existingEmpty = tbody.querySelector(".empty-row");
    if (visibleCount === 0) {
      if (!existingEmpty) tbody.appendChild(ensureEmptyRow());
    } else if (existingEmpty) {
      existingEmpty.remove();
    }
  });

  table.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    var row = btn.closest("tr");
    var name = row.querySelector(".patient-name-cell div div").textContent;
    var action = btn.getAttribute("data-action");

    if (action === "view") alert("Viewing record for " + name + " (demo).");
    if (action === "edit") alert("Edit form for " + name + " would open here (demo).");
    if (action === "delete") {
      if (confirm("Remove " + name + " from the patient list?")) {
        row.remove();
      }
    }
  });
})();
