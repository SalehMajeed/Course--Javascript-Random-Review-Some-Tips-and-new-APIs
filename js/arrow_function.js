const btn = document.getElementById("btnChangeBg");

btn.addEventListener("click", () => {
  console.log(this);
});

let a = 10;

const my_obj = {
  bottle: () => {
    console.log(a);
    console.log(this);
  },
};

my_obj.bottle();
