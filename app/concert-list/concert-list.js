'use strict';

angular.module('myApp.concertList', ['core.concert']);

angular.
  module('myApp.concertList').
  component('concertList', {
    templateUrl: 'concert-list/concert-list.html',
    controller: ['Concert',
      function ConcertListController(Concert) {
        this.concerts = Concert.query();
      }
    ]
  });
