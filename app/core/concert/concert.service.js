angular.
	module('core.concert').
		factory('Concert', ['$resource',
			function($resource) { 
				return $resource('https://damp-gorge-42650.herokuapp.com/concerts.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		])
