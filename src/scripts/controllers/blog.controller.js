angular.module('blog.controller',[]).controller('BlogController',_blogController);

function _blogController($scope,$http){
	$scope.hello = "blog section";

	$http.get('http://localhost:7000/api/v1/users')
	.then(function(result){
		$scope.users = result.data.users;
	})
	.catch(function(err){
		console.log("báo lỗi");
		console.error(err);
	})
}
