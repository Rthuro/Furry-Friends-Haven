const searchInput = document.getElementById('search-input');
const tableRows = document.querySelectorAll('.table-container tbody tr');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  tableRows.forEach(row => {
    const cells = row.getElementsByTagName('td');
    let isVisible = false;
    for (let i = 0; i < cells.length; i++) {
      const cellText = cells[i].textContent.toLowerCase();
      if (cellText.includes(searchTerm)) {
        isVisible = true;
        break;
      }
    }
    if (isVisible) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  const dropdownLinks = dropdownContent.querySelectorAll('a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const value = link.getAttribute('data-value');
      const columnIndex = Array.from(dropdown.parentElement.parentElement.children).indexOf(dropdown.parentElement);

      const tableRows = document.querySelectorAll('.table-container tbody tr');

      tableRows.forEach(row => {
        const cells = row.children;
        const cellValue = cells[columnIndex].innerText.toLowerCase();

        if (value === 'all') {
          row.style.display = '';
        } else if (cellValue.includes(value)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});


const search_input = document.getElementById('search-input');
const table_rows = document.querySelectorAll('.table-container tbody tr');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  tableRows.forEach(row => {
    const cells = row.getElementsByTagName('td');
    let isVisible = false;
    for (let i = 0; i < cells.length; i++) {
      const cellText = cells[i].textContent.toLowerCase();
      if (cellText.includes(searchTerm)) {
        isVisible = true;
        break;
      }
    }
    if (isVisible) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});