//declare custom service module
var sm = angular.module('serviceModule', []);

 sm.service('BookData', function($http, $rootScope) {
 	return {
 		getData: function() {
 			var url = "data/books.json";

 			$http.get(url).success(function(response) {
 				$rootScope.books = response;
 			});
 		}
 	}
 });