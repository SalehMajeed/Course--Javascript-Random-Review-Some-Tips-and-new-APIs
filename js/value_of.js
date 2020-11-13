const str = "dcode";
const str_obj = new String("dcode");
const str_obj_prim = str_obj.valueOf();

console.log(typeof str); //string
console.log(typeof str_obj); //object
console.log(str_obj_prim); // dcode
console.log(typeof str_obj_prim); // string

class Product {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  valueOf() {
    return this.cost;
  }
}

const p1 = new Product("Samsung Galaxy S8", 850);
const p2 = new Product("Goggle Pixel 3 XL", 790);
const cost = p1.cost + p2.cost;
const total = p1 + p2;

console.log(cost);
console.log(total);
