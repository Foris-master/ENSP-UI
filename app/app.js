'use strict';

// Declare app level module which depends on views, and components
var template_url='templates/'; // chemin vers le dossier des templates
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'ngWYSIWYG',
  'myApp.accueil',
  'myApp.actualite',
  'myApp.header',
  'myApp.publication',
  'myApp.departement',
  'myApp.personnel',
  'myApp.concours',
  'simplePagination'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/accueil'});
}]);
