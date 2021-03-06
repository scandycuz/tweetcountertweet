angular.module("app.mainApp")
.directive('onFinishRender', ["$timeout", function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
					setTimeout(function() {
						scope.$parent.loaded = false;
					}, 400);
				});
			}
		}
	}
}]);
