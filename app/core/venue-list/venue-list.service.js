angular.
	module('core.venueList').
		factory('VenueList', ['$resource',
			function($resource) { 
				return $resource('http://localhost:3000/venues.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		])
