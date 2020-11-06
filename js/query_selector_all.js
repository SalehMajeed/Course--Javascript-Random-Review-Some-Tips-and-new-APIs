const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach((e) => {
    e.style.color = 'red';
});

const list2 = document.querySelector('#list2');
const items = list2.querySelectorAll('li');
for (let i of items) {
    i.style.color = 'green';
}
