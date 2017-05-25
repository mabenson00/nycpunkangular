'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'core',
  'angular.filter',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',
  'myApp.concertList',
  'myApp.bandList',
  'myApp.version',
  'myApp.bandDetail',
  'myApp.venueList',
  'myApp.venueDetail',
  'myApp.controllers',
  'chart.js'

]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.
//   otherwise({redirectTo: '/concert-list'});
// }]);

config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/concert-list', {
          template: '<concert-list></concert-list>'
        }).
        when('/bands', {
          template: '<band-list></band-list>'
        }).
        when('/bands/:bandId', {
        	template: '<band-detail></band-detail>'
        }).
        when('/venues', {
          template: '<venue-list></venue-list>'
        }).
        when('/venues/venue-graph', {
          template: '<venue-list></venue-list>'
        }).
        otherwise('/concert-list');
    }
  ]);