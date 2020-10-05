// declare custom directive module
var dm = angular.module('directiveModule', []);

dm.directive('highlight', function() {
	return {
		restrict: 'EA',
		link: function(scope, element, attr) {
			element.bind('mouseover', mouseover);
			element.bind('mouseout', mouseout);

			function mouseover(event) {
				this.classList.add('highlight');
			}

			function mouseout(event) {
				this.classList.remove('highlight');
			}
		}
	}
});

dm.directive('ngTopic', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attr, ngModel) {

			function validationError(input) {
				if (input == 'AngularJS' ||
					input == 'BackboneJS' ||
					input == 'EmberJS' ||
					input == 'NodeJS') {
					ngModel.$setValidity("inputMatch", true);
				} else {
					ngModel.$setValidity("inputMatch", false);
				}
			}
			ngModel.$parsers.push(validationError);
		}
	};
});