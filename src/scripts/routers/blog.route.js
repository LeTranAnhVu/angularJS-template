angular.module('blog.router',[]).config(_blogRoute)

function _blogRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('blog', {
			url: '/blog',
			data: {
				pageTitle: 'Blog chia sẽ'
			},
			views: {
				'@': {
					controller: 'BlogController',
					templateUrl: '/views/blog.html'
				},
				'menu@': {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		})

}
