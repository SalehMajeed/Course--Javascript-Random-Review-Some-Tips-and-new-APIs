import TableCsv from "./table_csv.js";

const table_root = document.querySelector("#csv-root");
const table_csv = new TableCsv(table_root);
const csv_file_input = document.querySelector("#csv_file_input");

csv_file_input.addEventListener("change", (e) => {
  console.log("hello");
  console.log(csv_file_input.files[0]);
  Papa.parse(csv_file_input.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: (results) => {
      table_csv.update(results.data.slice(1), results.data[0]);
    },
  });
});
