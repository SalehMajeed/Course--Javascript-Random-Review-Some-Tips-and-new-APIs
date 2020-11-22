export default class {
  /**
   *
   * @param {HTMLTableElement} root the table element which will display csv data
   */
  constructor(root) {
    this.root = root;
  }

  update(data, header_column = []) {
    this.clear();
    this.set_header(header_column);
    this.set_body(data);
  }

  /**
   * clear all the content of table includeing the table.
   */
  clear() {
    this.root.innerHTML = "";
  }

  /**
   *
   * @param {string[]} header_column list of headings to be used
   */
  set_header(header_column) {
    this.root.insertAdjacentHTML(
      "afterbegin",
      `
      <thead>
        <tr>
          ${header_column.map((text) => `<th> ${text} </th>`).join("")}
        </tr>
     </thead>
        `
    );
  }

  /**
   *
   * @param {string[][]} data a 2d array of data to be used as the table body
   */
  set_body(data) {
    const rows_html = data.map((row) => {
      return `
                <tr>
                    ${row.map((text) => `<td>${text}</td>`).join("")}
                </tr>
            `;
    });

    this.root.insertAdjacentHTML(
      "beforeend",
      `
        <tbody>
            ${rows_html.join("")}
        </tbody>
      `
    );
  }
}
