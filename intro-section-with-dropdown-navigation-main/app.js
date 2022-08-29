const menu = document.querySelector(".header_menu");
const menu_collapsed = document.querySelector(".menu_collapse");
const crossed = document.querySelector(".cross_img");
const downs = document.querySelectorAll(".down");
const drop = document.querySelectorAll(".dropdown_menu");
const olay = document.querySelector(".overlay");
const filter = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  menu.classList.add("open");
  menu_collapsed.classList.add("expand");
  menu_collapsed.classList.remove("hidden");
  olay.classList.remove("hidden");
});
crossed.addEventListener("click", () => {
  crossed.classList.add("rotate");
  menu.classList.remove("open");
  menu_collapsed.classList.remove("expand");
  menu_collapsed.classList.add("hidden");
  olay.classList.add("hidden");
});
// downs.forEach(down => {
//   down.addEventListener("click", () => {
//     downs.classList.toggle("up");
//   });
// });

// downs.forEach((down) => {
//   down.addEventListener("click", () => {
//     down.classList.toggle("up");
//     //   const drop = document.querySelectorAll(".dropdown_menu");

//     //   drop.forEach((dropdown_menu) => {
//     //     dropdown_menu.classList.toggle("hidden");
//     //   });
//   });
// });
console.log(downs.length);
console.log(drop.length);
for (let i = 0; i < downs.length; i++) {
  downs[i].addEventListener("click", () => {
    downs[i].classList.toggle("up");
    drop[i].classList.toggle("hidden");
  });
}