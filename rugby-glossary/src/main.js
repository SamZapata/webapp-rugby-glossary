/* ====================================================================== */
/* Project: App Rugby Glossary */
/* Description: this app display a glossary of rugby terms using Vue.js */
/* Author: Johnny S Zapata */
/* Version: 0.1 */
/* ====================================================================== */

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.component('v-select', VueSelect.VueSelect);

const terms = [
	{
		init: 'S',
		term: 'Segunda Linea',
		description: "Es una posición de juego en la que es necesario contar con jugadores grandes, altos y de contextura fuerte, ya que su deber es sostener la primera linea y dar soporte en el scrum. Se usan los números 4 y 5 para designar esta posición.",
		showTerm: false,
	},
	{
		init: 'P',
		term: 'Pilar',
		description: "Posición de juego designada para los jugadores 1 y 3, que junto al hooker, conforman la primera linea. Por lo general los pilares son jugadores robustos, fuertes o de gran peso, pues una de sus principales funciones es soportar y empujar en el scrum, además de ser usados para ir a chocar y jugar al contacto.",
		showTerm: false,
	},
	{
		init: 'H',
		term: 'Hooker',
		description: "Nombre que recibe el jugador demarcado por la camiseta número 2. Es una posición de juego y hace parte de la primera linea, conformada por los jugadores 1, 2 y 3. Es una posición para jugadores fuertes, robustos o potentes y con capacidad de liderazgo, ya que adquiere importantes funciones dentro de la cancha.",
		showTerm: false,
	},
	{
		init: 'F',
		term: 'Flanker',
		description: "Es el nombre que reciben los jugadores en la posición con el número 6 o 7 de la tercera linea. Por lo general son jugadores fuertes, grandes y con sed de tackle.",
		showTerm: false,
	},
	{
		init: 'R',
		term: 'Rugby',
		description: "Es un deporte de combate y de equipo, en el que se enfrentan dos equipos en una cancha de césped. El objetivo es anotar la mayor cantidad de puntos al equipo rival, respetando las reglas de juego. En esta disciplina deportiva se ponen a prueba las diversas capacidades físicas y cognitivas junto al equilibrio emocional de las personas que lo practican.",
		showTerm: false,
	},
	{
		init: 'M',
		term: 'Medio Scrum',
		description: "Es una forma de llamar a la posición del jugador número 9 en el rugby unión.",
		showTerm: false,
	},
	{
		init: 'M',
		term: 'Melé',
		description: "Es un término que se utiliza para referirse al Scrum; dicho término es acuñado por el rugby francés. Sin embargo, en algunos países se ha utilizado para referirse a la posición del medio scrum o 9.",
		showTerm: false,
	},
	{
		init: 'C',
		term: 'Continuidad',
		description: "Es un principio de juego que indica que se debe tratar de mantener el balón en movimiento y en disposición para jugar. En otras palabras, el juego no se detiene hasta que el referee suene el silbato o un jugador(a) resulte con un impacto de gravedad.",
		showTerm: false,
	},
	{
		init: 'D',
		term: 'Drop',
		description: "El Drop-goal es una forma anotar que regala 3 puntos. Consiste en patear el balón después de soltarlo y dejar que primero toque el suelo; es así como también se puede llamar gol de sobre-pique",
		showTerm: false,
	},
	{
		init: 'C',
		term: 'Conversión',
		description: "Es una forma de conseguir 2 puntos. Consiste en patear a la 'H' después de marcar un Try; el lugar desde donde se pateará es paralelo al punto donde se apoyó el balón.",
		showTerm: false,
	},
	{
		init: 'A',
		term: 'Anotar',
		description: "Es el último principio de juego. La principal forma de conseguir puntos es haciendo un 'Try' que equivale a 5 puntos, después de un try se podrá patear a la 'H' para hacer una 'conversión' que suma 2 puntos más. También se pueden sumar 3 puntos al patear a la 'H' cuando se marca un penal o durante juego abierto con una patada de sobrepique o drop.",
		showTerm: false,
	},
	{
		init: 'A',
		term: 'Avanzar',
		description: "Uno de los principios más importantes del juego tanto en defensa como en ataque; siempre ir hacia adelante",
		showTerm: false,
	},
	{
		init: 'B',
		term: 'Busetear',
		description: "Impactar fuerte mientras se avanza con el balón",
		showTerm: false,
	},
	{
		init: 'B',
		term: 'Breakdown',
		description: "Situación de juego cuando se entra en contacto o al  hacer el duelo",
		showTerm: false,
	},
	{
		init: 'B',
		term: 'Ball carrier',
		description: "Jugador fuerte y rápido que lleva la pelota en jugadas de ataque",
		showTerm: false,
	},
	{
		init: 'K',
		term: 'Knock-on',
		description: "Falta que se produce cuando se pierde el control del balón y este cae hacia adelante",
		showTerm: false,
	},
	{
		init: 'L',
		term: 'Line Out',
		description: "Es una forma de reiniciar el juego después que la pelota, o un jugador que la porta, cruza la línea de touch.",
		showTerm: false,
	},
	{
		init: 'M',
		term: 'Maul',
		description: "Situación de juego que se da cuando el jugador que porta la pelota no es derribado y mientras se mantiene en pie es retenido por un oponente y a su vez apoyado por un compañero quien lo ayuda a avanzar",
		showTerm: false,
	},
	{
		init: 'T',
		term: 'Tackle',
		description: "Es el principal recurso del equipo defensor para detener al jugador que avanza con el balón",
		showTerm: false,
	},
	{
		init: 'R',
		term: 'Ruck',
		description: "Situación de juego que se da normalmente después de un tackle en la que se pone en disputa la posesión del balón",
		showTerm: false,
	},
	{
		init: 'S',
		term: 'Scrum',
		description: "El scrum es un medio de reiniciar el juego después de una detención causada por una infracción menor a las Leyes (por ejemplo: un pase forward o un knock-on) o si resulta imposible jugar la pelota en un ruck o maul",
		showTerm: false,
	},
	{
		init: 'T',
		term: 'Try',
		description: "Forma de anotar puntos que equivale a 5 puntos y consiste en apoyar la pelota contra el suelo después de la linea de goal del equipo rival",
		showTerm: false,
	},
];

const initTerm = ['TODOS','A','B','C','D','F','H','K','L','M','P','R','S','T'];

const glossary = new Vue ({
	el: '#glossary',
	data: {
		concept: terms,
		init: initTerm,
		selectInit: null,
		search: "tackle"
	},
	methods: {
		//function to display the description of each term
		toggleTerms: function(term) {
			term.showTerm = !term.showTerm
		},

		testIf: function(){
			return this.concept.showTerm;
		},

		// select the first character of each term
		// characterTerm: function() {
		// 	var stringTerm = init.split("");
		// 	return stringTerm;
		// },
	},
	computed: {
	    // function to sort the terms by alphabet order
	    sortedArray: function() {
	      function compare(a, b) {
	        if (a.term < b.term)
	          return -1;
	        if (a.term > b.term)
	          return 1;
	        return 0;
	      }
	      return this.concept.sort(compare);
	  	},

		//Searchs
		searchTerm: function(){
			return this.concept.filter((auxC) => {
				return auxC.term.match(this.search);
			});
		}
    },
});

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#modale',
  data: {
    showModal: false
  }
})