angular.
	module('core.venueDetail').
		factory('VenueDetail', ['$resource',
			function($resource) { 
				return $resource('https://damp-gorge-42650.herokuapp.com/venues/:venueId.json', {}, {
					query: {
						method: 'GET',
						params: {venueId: 'venues'},
						isArray: false
					}
				});
			}
		])

