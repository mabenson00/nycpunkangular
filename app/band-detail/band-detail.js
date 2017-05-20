'use strict';

angular.module('myApp.bandDetail', ['core.band-detail']);




angular.
  module('myApp.bandDetail').
  component('bandDetail', {
    templateUrl: 'band-detail/band-detail.html',
    controller: ['$routeParams', 'BandDetail',
      function BandDetailController($routeParams, BandDetail) {
        this.band = BandDetail.get({bandId: $routeParams.bandId})

      }
    ]
  });

