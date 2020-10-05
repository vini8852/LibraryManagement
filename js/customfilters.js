// declare custom filter module
var fm = angular.module('filterModule', []);

 fm.filter('filterunissued', function() {
 	return function(books, viewbookoption) {
 		if (viewbookoption == 'Available') {
 			return books.filter(function(book) {
 				return !book.issued;
 			});
 		} else {
 			return books;
 		}
 	}
 });