const toogleBtn1 = document.querySelector(".nav__toogleBtn1");
const toogleBtn2 = document.querySelector(".nav__toogleBtn2");
const toogleBtn3 = document.querySelector(".nav__toogleBtn3");
const toogleBtn4 = document.querySelector(".nav__toogleBtn4");

const DropDown1Cnt = document.querySelector(".dropDown1");
const DropDown2Cnt = document.querySelector(".dropDown2");
const DropDown3Cnt = document.querySelector(".dropDown3");
const DropDown4Cnt = document.querySelector(".dropDown4");

toogleBtn1.addEventListener("click", () => {
  DropDown1Cnt.classList.toggle("active");
});

toogleBtn2.addEventListener("click", () => {
  DropDown2Cnt.classList.toggle("active");
});

toogleBtn3.addEventListener("click", () => {
  DropDown3Cnt.classList.toggle("active");
});

toogleBtn4.addEventListener("click", () => {
  DropDown4Cnt.classList.toggle("active");
});
