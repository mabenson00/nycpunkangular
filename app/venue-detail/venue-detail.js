'use strict';

angular.module('myApp.venueDetail', ['core.venueDetail']);

angular.
  module('myApp.venueDetail').
  component('venueDetail', {
    templateUrl: 'venue-detail/venue-detail.html',
    controller: ['$routeParams', 'VenueDetail',
      function VenueDetailController($routeParams, VenueDetail) {
        this.venue = VenueDetail.get({venueId: $routeParams.venueId})
        console.log(this.venue)
      }
    ]
  });
