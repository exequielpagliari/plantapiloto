var prevButton = document.getElementById("slide-arrow-prev");
var nextButton = document.getElementById("slide-arrow-next");
var posc = document.querySelector(".articulo");
var newPosc = document.querySelector(".slide");
var cantPosc = 0;
var operacion = 0;
console.log(posc);
console.log(posc.length);
console.log(newPosc);


nextButton.addEventListener("click", () => {
  cantPosc++;
  refrescar();
});

prevButton.addEventListener("click", () => {
  cantPosc--;
  refrescar();
});


function refrescar(){
if (cantPosc < 0) {cantPosc = 2} 
else if (cantPosc > 2) {cantPosc = 0};
operacion = cantPosc * -33.3;
newPosc.style.transform = `translateX(${ operacion }%)`;
}