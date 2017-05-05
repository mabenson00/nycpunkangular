angular.
	module('core.bands').
		factory('Band', ['$resource',
			function($resource) { 
				return $resource('http://localhost:3000/bands.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		]);

