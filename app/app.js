'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'core',
  'angular.filter',
  'myApp.concertList',
  'myApp.bandList',
  'myApp.version',
  'myApp.bandDetail'

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
        otherwise('/concert-list');
    }
  ]);