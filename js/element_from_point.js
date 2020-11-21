let pos;

document.addEventListener("mousemove", ({ pageX, pageY }) => {
  pos = `(${pageX}, ${pageY})`;

  console.log(pos);
  console.log(document.elementFromPoint(3, 220));
});
