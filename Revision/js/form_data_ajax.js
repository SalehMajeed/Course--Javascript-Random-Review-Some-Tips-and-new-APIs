// const data = new FormData();

// data.append("name", "anony");

// const xhr = new XMLHttpRequest();

// xhr.open(
//   "post",
//   "http://localhost/Javascript%20Random,%20Review%20+%20Some%20Tips%20and%20new%20APIs/Revision/bottle.php"
// );
// xhr.send(data);

const form_data = document.getElementById("form-data");

form_data.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form_data);
  const request = new XMLHttpRequest();

  
});
