
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
        pais: "",
        localidad: "",
        provincia: "",
        fechaYHora: "",
        fecha:"",
        hora:"",
        dia: "",
        mes: "",
        anio:""

      }
  },
/*Cuando ubicamos el módulo de comunicación
se debe crear en data() aquello que va a ser modificado.*/
  created(){

      fetch("https://api.weatherapi.com/v1/forecast.json?key=c33e497f840b4b23914120535231605&q=auto:ip&days=1&aqi=yes&alerts=yes")
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
          this.fecha= ` ${data.location.localtime.slice(0,11)}`,
          this.hora= ` ${data.location.localtime.slice(11,16)}`,
          this.dia=  `${data.location.localtime.slice(8,10)}`,
          this.mes= `${data.location.localtime.slice(5,7)}`,
          this.anio= `${data.location.localtime.slice(0,4)}`
      })

      .catch(err => console.log(err))

  }

}).mount("#app")

