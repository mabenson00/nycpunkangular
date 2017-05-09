'use strict';

angular.module('myApp.venueList', ['core.venueList']);

angular.
  module('myApp.venueList').
  component('venueList', {
    templateUrl: 'venue-list/venue-list.html',
    controller: ['VenueList',
      function ConcertListController(VenueList) {
        this.venues = VenueList.query();
        console.log(this.venues)
      }
    ]
  });
