let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
function showSlide1() {
  slide1.style.display = "block";
  slide2.style.display = "none";
}
function showSlide2() {
  slide1.style.display = "none";
  slide2.style.display = "block";
}
