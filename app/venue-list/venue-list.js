'use strict';

var venueListModule = angular.module('myApp.venueList', ['core.venueList']);
var venueslist;
angular.
  module('myApp.venueList').
  component('venueList', {
    templateUrl: 'venue-list/venue-list.html',
    controller: ['VenueList',
      function ConcertListController(VenueList) {
        this.venues = VenueList.query()
        venueslist = this.venues
        
      }
    ]
  });

venueListModule.controller("DoughnutCtrl", function ($scope) {
  var labels =[]
  var data=[]
  venueslist.$promise.then(function(response) {
    for (let i = 0; i <response.length-2; i++) {
      labels.push(response[i].name)
      data.push(response[i].concerts.length)
    }
  })
  $scope.labels = labels
  $scope.data = data
});