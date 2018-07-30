/* ====================================================================== */
/* Project: App Rugby Glossary */
/* Description: this app display a glossary of rugby terms using Vue.js */
/* Author: Johnny S Zapata */
/* Version: 0.1 */
/* ====================================================================== */

//To Do List
// Storage terms and descriptions
// Organize terms by initial letter
//

Vue.component('v-select', VueSelect.VueSelect);

const terms = [
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

const initTerm = ['TODOS','A','B','K','L','M','R','S','T'];

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