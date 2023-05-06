var posc = document.querySelector(".articulo");
var newPosc = document.querySelector(".slide");
var cantPosc = 0;
var operacion = 0;
console.log(posc);
console.log(posc.length);
console.log(newPosc);

const slidesContainer = document.getElementById(".slide");
const slide = document.querySelector(".articulo");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  cantPosc++;
  refrescar();
});

prevButton.addEventListener("click", () => {
  cantPosc--;
  refrescar();
});


function refrescar(){
if (cantPosc < 0) {cantPosc = 3} 
else if (cantPosc > 3) {cantPosc = 0};
operacion = cantPosc * -25;
newPosc.style.transform = `translateX(${ operacion }%)`;
}