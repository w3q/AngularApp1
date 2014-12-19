angular.module('videoAppFilters', []).filter('categoryFilter', function () {
	return function (input) {
		if(input) {
			var categories = [];
			for(var i = 0; i < input.length; i++) {
				for(var j = 0; j<input[i].categories.length; j++) {
					categories.push(input[i].categories[j]);
				}
			}
			categories =  _.uniq(categories,false);
			return categories;
		}
	}
});


