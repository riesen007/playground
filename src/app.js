'use strict';
angular.module('tutorialApp', [ 'ngAnimate', 'ngRoute' ]).config(
		function($routeProvider) {
			$routeProvider.when('/linksAxa', {
				templateUrl : 'linksAxa.html'
			}).when('/linksPrivat', {
				templateUrl : 'linksPrivat.html'
			}).when('/start', {
				template : 'Hier steht noch nichts'
			}).otherwise({
				redirectTo : '/'
			});
		}).controller('LinksPrivatCtrl', function($scope, $http) {
	$http.get('linksPrivat.json').then(function(linksPrivatResponse) {
		$scope.linksPrivat = linksPrivatResponse.data;
	});

}).controller('LinksAxaCtrl', function($scope, $http) {
		$http.get('linksAxa.json').then(function(linksAxaResponse) {
			$scope.linksAxa = linksAxaResponse.data;
		});
});