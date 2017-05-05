angular.
	module('core.concert').
		factory('Concert', ['$resource',
			function($resource) { 
				return $resource('http://localhost:3000/concerts.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		])
