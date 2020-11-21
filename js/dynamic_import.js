document.addEventListener("DOMContentLoaded", async () => {
  const math = await import("./utils.js");
  console.log(math.default(10, 5));
});
