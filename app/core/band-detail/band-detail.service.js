angular.
	module('core.band-detail').
		factory('BandDetail', ['$resource',
			function($resource) { 
				return $resource('https://damp-gorge-42650.herokuapp.com/bands/:bandId.json', {}, {
					query: {
						method: 'GET',
						params: {bandId: 'bands'},
						isArray: false
					}
				});
			}
		])

