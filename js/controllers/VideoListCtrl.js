var videoApp = angular.module('videoApp', ['videoAppFilters', 'ui.unique', 'angularUtils.directives.dirPagination']);
videoApp.controller('VideoCtrl', function ($scope, $http, $filter, cacheLoader, $rootScope) {

	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		return $scope.pageSize;
	};

	$scope.addFavorite = function (data, key) {
		localStorage.setItem(key, data);
		$scope.videos = $filter('articleFilter')(data, $scope.allData);
		return alert(key + " "+ data + " was added to your favorite list.");
	};

  //Toto je funkcia na pridanie Selected classy pre html elementy
	$scope.addSelectedClass = function (event) {
		if($(event.target).hasClass("selected") == true)
		{
			$(event.target).removeClass("selected");
		} else {
			$(".selected").removeClass("selected");
			$(event.target).addClass("selected");
		}
	};
  
  function BlaBla() {
    console.log("bla");
  }

	$scope.filterArticles = function (category) {
		$scope.videos = $filter('articleFilter')(category, $scope.allData);
	};

	$scope.pageSize = 12;

	cacheLoader.load('http://academy.tutoky.com/api/json.php', true, function () {
		$scope.allData = $rootScope.allData;
		$scope.videos = $rootScope.videos;

		if(localStorage.getItem('category')) {
			$scope.videos = $filter('articleFilter')(localStorage.getItem('category'), $scope.allData);
		} else {
			$scope.videos = data;
		}
	});

});
