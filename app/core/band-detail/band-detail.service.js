angular.
	module('core.band-detail').
		factory('BandDetail', ['$resource',
			function($resource) { 
				return $resource('http://localhost:3000/bands/:bandId.json', {}, {
					query: {
						method: 'GET',
						params: {bandId: 'bands'},
						isArray: false
					}
				});
			}
		])

