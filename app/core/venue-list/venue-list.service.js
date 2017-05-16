angular.
	module('core.venueList').
		factory('VenueList', ['$resource',
			function($resource) { 
				return $resource('https://damp-gorge-42650.herokuapp.com/venues.json', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				});
			}
		])
