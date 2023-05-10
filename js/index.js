const { createApp } = Vue;

createApp({
    data(){
        return{

            html: "<h1>Aprendiendo componentes</h1><h2>ESTA GENIAL</h2>",

        }
    },


    components:{
        "prueba":{
            template: "<section><ul><li>Soy el Item1</li></ul></section>",
        }
    }


}).mount("#header")






















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
if (cantPosc < 0) {cantPosc = 4} 
else if (cantPosc > 4) {cantPosc = 0};
operacion = cantPosc * -20;
newPosc.style.transform = `translateX(${ operacion }%)`;
}