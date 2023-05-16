
var prevButton = document.getElementById("slide-arrow-prev");
var nextButton = document.getElementById("slide-arrow-next");
var posc = document.querySelector(".articulo");
var newPosc = document.querySelector(".slide");
var cantPosc = 0;
var operacion = 0;



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




/* Contruccion del VUE*/



const app = Vue.createApp({
  data(){
      return{
        pais: "PAIS",
        localidad: "LOCALIDAD",
        provincia: "PROVINCIA",
        fechaYHora: "FECHAYHORA" 
      }
  },
/*Cuando ubicamos el módulo de comunicación
se debe crear en data() aquello que va a ser modificado.*/
  created(){
      /*
      fetch("http://api.weatherstack.com/current?access_key=3735a5a615e74cfaf1a5998e1ad06d43&query=fetch:ip")
      .then(res => res.json())
      .then(data => {
          console.log(data);
          console.log(data.location.country)
          console.log(data.location.name)
          console.log(data.location.region)
          console.log(data.location.localtime)

          this.pais = data.location.country
          this.localidad = data.location.name
          this.provincia = data.location.region
          this.fechaYHora = data.location.localtime

      })

      .catch(err => console.log(err))
*/
  }

}).mount("#app")

