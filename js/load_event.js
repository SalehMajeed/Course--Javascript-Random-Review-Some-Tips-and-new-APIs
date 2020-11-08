const img1 = document.getElementById('my-img1');
const img2 = document.getElementById('my-img2');

img1.addEventListener('load', function () {
    console.log(img1);
});

img2.addEventListener('load', function () {
    console.log(img2);
});

window.addEventListener('load', function () {
    console.log(img1);
    console.log(img2);
});
