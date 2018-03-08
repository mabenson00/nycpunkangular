'use strict';

angular.module('myApp.bandList', ['core.bands']);

angular.
  module('myApp.bandList').
  component('bandList', {
    templateUrl: 'bands/bands.html',
    controller: ['Band',
      function BandListController(Band) {
        this.bands = Band.query();
        console.log(this.bands)
      }
    ]
  });
