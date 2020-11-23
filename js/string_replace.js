const my_str = "Hey, i am 34 and she is 35";

// console.log(my_str.replace(/\d+/g, "22"));

// console.log(my_str.replace(/(\d+)([^\d]+)(\d+)/g, "$3$2$1 $$"));

console.log(
  my_str.replace(/(\d+)([^\d]+)(\d+)/g, function (match, g1, g2, g3) {
    // console.log(arguments);
    return parseInt(g1) + parseInt(g3);
  })
);
