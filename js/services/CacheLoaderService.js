videoApp.factory('cacheLoader', function ($http, $filter, $rootScope) {
	return {
		load: function (url, allowCache, callback) {
			$scope = $rootScope;
			if(allowCache == false || localStorage.getItem(url) && (parseInt(localStorage.getItem(url + 'time')) + 20000) < (new Date().getTime()) || (!localStorage.getItem(url) )) {
				$http.get(url).success(function (data) {

					$scope.allData = data;
					$scope.videos = data;

					$scope.categories = $filter('categoryFilter')(data);

					if(allowCache == true && parseInt(localStorage.getItem(url + 'time')) + 20000 < (new Date().getTime() )) {
						localStorage.setItem(url, JSON.stringify(data));
						localStorage.setItem(url + 'time', new Date().getTime());
					}

					callback();
				});
			} else {
				$scope.allData = JSON.parse(localStorage.getItem(url));
				$scope.videos = JSON.parse(localStorage.getItem(url));
				$scope.categories = $filter('categoryFilter')(JSON.parse(localStorage.getItem(url)));
				callback();
			}
		}
	};
});