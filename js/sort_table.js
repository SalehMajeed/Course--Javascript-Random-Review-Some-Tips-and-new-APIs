/**
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {*} asc Determines if the sorting will be in ascending
 */
function sort_table_by_column(table, column, asc = true) {
  const dir_modifier = asc ? 1 : -1;
  const t_body = table.tBodies[0];
  const rows = Array.from(t_body.querySelectorAll("tr"));

  // Sort Each row
  const sorted_row = rows.sort((a, b) => {
    const a_colt_text = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    const b_colt_text = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return a_colt_text > b_colt_text ? 1 * dir_modifier : -1 * dir_modifier;
  });

  // Remove All tr from table
  while (t_body.firstChild) {
    t_body.removeChild(t_body.firstChild);
  }
  // Re-add the newly sorted rows
  t_body.append(...sorted_row);

  //Remember how the column is sorted
  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

sort_table_by_column(document.querySelector("table"), 1);

const sortable = document.querySelectorAll(".table-sortable th");
sortable.forEach((header_cell) => {
  header_cell.addEventListener("click", () => {
    const table_element = header_cell.parentElement.parentElement.parentElement;
    const header_index = Array.prototype.indexOf.call(
      header_cell.parentElement.children,
      header_cell
    );
    const current_asc = header_cell.classList.contains("th-sort-asc");

    sort_table_by_column(table_element, header_index, !current_asc);
  });
});
