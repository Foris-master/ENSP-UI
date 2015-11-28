'use strict';

// Declare app level module which depends on views, and components
var template_url='templates/'; // chemin vers le dossier des templates
//definition de tout les modules
var app_accueil =angular.module('myApp.accueil', ['ngRoute']);
var app_header =angular.module('myApp.header', ['ngRoute']);
var app_actualite =angular.module('myApp.actualite', ['ngRoute']);
var app_concours =angular.module('myApp.concours', ['ngRoute','720kb.datepicker']);
var app_departement =angular.module('myApp.departement', ['ngRoute']);
var app_publication=angular.module('myApp.publication', ['ngRoute','720kb.datepicker']);


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
  'angularUtils.directives.dirPagination'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/accueil'});
}]);
