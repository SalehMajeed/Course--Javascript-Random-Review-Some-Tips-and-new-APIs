// console.log({}.toString());
// console.log(Object.prototype.toString.call([]));

// const my_array = [2, 4, 6];
// console.log(my_array.toString());
// console.log(my_array);

// const search_param = new URLSearchParams([
//   ["name", "anony"],
//   ["age", 19],
// ]);

// console.log(search_param.toString());

class Rectangle {
  constructor(width, height, unit) {
    this.width = width;
    this.height = height;
    this.unit = unit;
  }

  toString() {
    return `${this.width * this.height}${this.unit}`;
  }
}

class Color extends Rectangle {
  super(width, height, unit, color) {
    this.Color = color;
  }
}

const my_rect = new Rectangle(5, 8, "cm");
console.log(my_rect.toString());

const color = new Color(24, 5, "cm", "red");
console.log(color);
console.log(Rectangle.prototype.toString.call(color));
