// Controler to loop the cards from the DataBase

var cardsApp = angular.module('cardsApp', ["slugifier"]);

cardsApp.controller('cardsController', function ($scope) {
  $scope.cards = cards;
  
});


// I can try this later. Maybe a solution to keep the row name.
// var obj = {a: 1, b: 2, c: 3};
// Object.keys(obj)[0]; // "a"


// JSON DataBase
var cards = [
[
  {	"title": "Cláudio Mendonça",
	  "subtitle": "Graphic Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
  {	"title": "Juliana Andrade",
	  "subtitle": "Fashion Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 1,
	  	"column": 2,
	  	"top": null,
	  	"left": null
	  }
  },
  {	"title": "Thales Leite",
	  "subtitle": "Publicitário",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 1,
	  	"column": 3,
	  	"top": null,
	  	"left": null
	  }
  },
  {	"title": "Leticia Uesugi",
	  "subtitle": "Video Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 1,
	  	"column": 4,
	  	"top": null,
	  	"left": null
	  }
  },
  {	"title": "rafael Morado",
	  "subtitle": "Game Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 1,
	  	"column": 5,
	  	"top": null,
	  	"left": null
	  }
  }
],
[
	{	"title": "Ramen Ya",
	  "subtitle": "Japa",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 2,
	  	"column": 1,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Burger King",
	  "subtitle": "Tosqueira",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 2,
	  	"column": 2,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Omnivore",
	  "subtitle": "Saudável",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 2,
	  	"column": 3,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Pantera Verde",
	  "subtitle": "Vegan",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 2,
	  	"column": 4,
	  	"top": null,
	  	"left": null
	  }
  }
],
[
	{	"title": "Ramen Ya",
	  "subtitle": "Japa",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 3,
	  	"column": 1,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Burger King",
	  "subtitle": "Tosqueira",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 3,
	  	"column": 2,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Omnivore",
	  "subtitle": "Saudável",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 3,
	  	"column": 3,
	  	"top": null,
	  	"left": null
	  }
  },
	{	"title": "Pantera Verde",
	  "subtitle": "Vegan",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic.",
	  "coords": {
	  	"row": 3,
	  	"column": 4,
	  	"top": null,
	  	"left": null
	  }
  }
]
];