angular.
	module('core.bands').
		factory('Band', ['$resource',
			function($resource) { 
				return $resource('https://damp-gorge-42650.herokuapp.com/bands.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		]);

