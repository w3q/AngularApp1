angular.module('videoAppFilters').filter('articleFilter', function () {
	return function (category, data) {
		if(category == "all")
		{
			return _.uniq(data);
		}
		var filteredData = [];
			for (var i = 0; i < data.length; i++) {
				for (var j = 0; j < data[i].categories.length; j++) {
					if (data[i].categories[j] == category) {
						filteredData.push(data[i]);
					}
				}
			}
		return filteredData;
	};
});