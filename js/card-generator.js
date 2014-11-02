// JSON DataBase
var cards = {
"designers": [
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
"restaurants": [
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
]};

var cardsApp = angular.module('cardsApp', []);

cardsApp.controller('designersController', function ($scope) {
  $scope.designers = 	cards.designers	});

cardsApp.controller('restaurantsController', function ($scope) {
  $scope.restaurants = 	cards.restaurants	});