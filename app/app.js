'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.accueil',
  'myApp.header',
  'myApp.articles',
  'myApp.publication',
  'myApp.concours',
  'myApp.actualite',
  'simplePagination'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/accueil'});
}]);
