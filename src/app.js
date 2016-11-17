'use strict';
angular.module('myApp', [ 'ngAnimate', 'ngRoute' ]).config(
		function($routeProvider) {
			$routeProvider.when('/start', {
				template : 'Seite ist noch im Aufbau...',
				name : "Start"
			}).when('/linksAxa', {
				templateUrl : 'linksAxa.html',
				name : "Links Axa"
			}).when('/linksPrivat', {
				templateUrl : 'linksPrivat.html',
				name : "Links Privat"
			}).when('/fragen', {
				template : 'Hier können Sie fragen stellen...',
				name : "Fragen"
			}).when('/about', {
				template : 'Erfahren sie mehr über uns...',
				name : "About"
			}).when('/sonstiges', {
				template : 'Hier gibts alles anderes...',
				name : "Sonstiges"
			}).otherwise({
				redirectTo : '/start'
			});
		}).controller('LinksPrivatCtrl', function($scope, $http) {
	$http.get('linksPrivat.json').then(function(linksPrivatResponse) {
		$scope.linksPrivat = linksPrivatResponse.data;
	});

}).controller('LinksAxaCtrl', function($scope, $http) {
	$http.get('linksAxa.json').then(function(linksAxaResponse) {
		$scope.linksAxa = linksAxaResponse.data;
	});
}).run(function($rootScope, $location, $route) {
	$rootScope.$location = $location;
	$rootScope.$route = $route;
	$rootScope.keys = Object.keys;
});