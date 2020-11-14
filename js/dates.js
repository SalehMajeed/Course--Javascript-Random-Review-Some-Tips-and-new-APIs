let d = new Date();
let d1 = new Date(1164411006456);
let d2 = new Date("2019-08-02T11:30:00+10:00");
let d3 = new Date(2019, 7, 2, 11, 30, 27, 0); // year month day hour minute second miliSecond

console.log(d.toDateString()); // show date
console.log(d1.toDateString()); // show date of previeous nanonseconds
console.log(d2.toDateString()); // show date perticular time
console.log(d3.toDateString()); // show date that has passed into the parameter

console.log(d3.getFullYear()); // 2019
console.log(d3.getMonth()); // 7
console.log(d3.getDay()); // 5
console.log(d3.getHours()); // 11
console.log(d3.getMinutes()); // 30
console.log(d3.getSeconds()); // 27
console.log(d3.getMilliseconds()); //0

console.log(d.getUTCHours()); // 5

d.setMinutes(10);
d.setDate(5);
console.log(d.toDateString());

console.log(d.toISOString());
console.log(
  d.toLocaleString("en-AU", {
    timeZone: "America/los_angeles",
  })
);
console.log(d.toLocaleString("en-US"));
console.log(
  JSON.stringify({
    myDate: d,
  })
);
