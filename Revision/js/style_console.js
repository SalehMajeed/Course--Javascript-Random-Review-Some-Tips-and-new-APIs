console.log("%c This is a green txt", "color:green; font-size: 20px");
console.log(" This is a green %c txt", "color:green");

var styleArray = [
  'background-image:    url("https://media.giphy.com/media/2dQ3FMaMFccpi/giphy.gif")',
  "background-size: cover",
  "color: #fff",
  "padding: 10px 20px",
  "line-height: 35px",
  "width : 70px",
  "height : 70px",
  "border : 5px solid black",
];
var a = 10;
console.log("%c theme", styleArray.join(";"));
