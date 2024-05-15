const searchInput = document.getElementById('search-input');
const tableRows = document.querySelectorAll('table tbody tr');
const tableFoot = document.querySelector('table tfoot');

searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredRows = Array.from(tableRows).filter((row) => {
    const cells = row.querySelectorAll('td');
    return Array.from(cells).some((cell) =>
      cell.textContent.toLowerCase().includes(searchQuery)
    );
  });

  tableRows.forEach((row) => {
    if (filteredRows.includes(row)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });

  if (searchQuery) {
    tableFoot.style.display = 'none';
  } else {
    tableFoot.style.display = '';
  }
});


document.addEventListener("DOMContentLoaded", function() {
  var amountDropdown = document.getElementById("amount-dropdown");
  var transactionModeDropdown = document.getElementById("transaction-mode-dropdown");
  var dateDropdown = document.getElementById("date-dropdown");
  var table = document.getElementById("donationTable");

  amountDropdown.addEventListener("click", function(event) {
    var selectedValue = event.target.getAttribute("data-value");
    filterTable(selectedValue, "amount");
  });

  transactionModeDropdown.addEventListener("click", function(event) {
    var selectedValue = event.target.getAttribute("data-value");
    filterTable(selectedValue, "transactionMode");
  });

  dateDropdown.addEventListener("click", function(event) {
    var selectedValue = event.target.getAttribute("data-value");
    filterTable(selectedValue, "date");
  });

  function filterTable(selectedValue, column) {
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var cellValue = row.cells[column].textContent;
      if (selectedValue === "highest" || selectedValue === "lowest") {
        if (cellValue!== selectedValue) {
          row.style.display = "none";
        } else {
          row.style.display = "";
        }
      } else {
        if (cellValue!== selectedValue) {
          row.style.display = "none";
        } else {
          row.style.display = "";
        }
      }
    }
  }
});