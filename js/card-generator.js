// Controler to loop the cards from the DataBase

var cardsApp = angular.module('cardsApp', []);

cardsApp.controller('cardsController', function ($scope) {
  $scope.cards = cards;
  
});


// I can try this later. Maybe a solution to keep the row name.
// var obj = {a: 1, b: 2, c: 3};
// Object.keys(obj)[0]; // "a"


// JSON DataBase
var cards = [
[
  {	"title": "Claudio Mendonca",
	  "subtitle": "Graphic Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
  {	"title": "Juliana Andrade",
	  "subtitle": "Fashion Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
  {	"title": "Thales Leite",
	  "subtitle": "Publicitário",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
  {	"title": "Leticia Uesugi",
	  "subtitle": "Video Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
  {	"title": "rafael Morado",
	  "subtitle": "Game Designer",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  }
],
[
	{	"title": "Ramen Ya",
	  "subtitle": "Japa",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Burger King",
	  "subtitle": "Tosqueira",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Omnivore",
	  "subtitle": "Saudável",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Pantera Verde",
	  "subtitle": "Vegan",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  }
],
[
	{	"title": "Ramen Ya",
	  "subtitle": "Japa",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Burger King",
	  "subtitle": "Tosqueira",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Omnivore",
	  "subtitle": "Saudável",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  },
	{	"title": "Pantera Verde",
	  "subtitle": "Vegan",
	  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nihil aperiam nesciunt a iusto sapiente distinctio natus laboriosam hic."
  }
]
];

