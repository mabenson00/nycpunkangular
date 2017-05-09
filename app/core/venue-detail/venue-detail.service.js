angular.
	module('core.venueDetail').
		factory('VenueDetail', ['$resource',
			function($resource) { 
				return $resource('http://localhost:3000/venues/:venueId.json', {}, {
					query: {
						method: 'GET',
						params: {venueId: 'venues'},
						isArray: false
					}
				});
			}
		])

