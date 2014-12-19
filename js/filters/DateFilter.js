angular.module('videoAppFilters').filter('dateFilter', function () {
	return function (dateString) {
		var date = new Date(parseInt(dateString));
		return date.toDateString();
	}
});


