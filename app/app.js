'use strict';

// Declare app level module which depends on views, and components
var template_url='templates/'; // chemin vers le dossier des templates
//definition de tout les modules
var app_accueil =angular.module('myApp.accueil', ['ngRoute']);
var app_header =angular.module('myApp.header', ['ngRoute']);
var app_actualite =angular.module('myApp.actualite', ['ngRoute']);
var app_concours =angular.module('myApp.concours', ['ngRoute','720kb.datepicker']);
var app_departement =angular.module('myApp.departement', ['ngRoute']);
var app_personnel =angular.module('myApp.personnel', ['ngRoute']);
var app_diplome =angular.module('myApp.diplome', ['ngRoute']);
var app_organisation =angular.module('myApp.organisation', ['ngRoute']);
var app_publication=angular.module('myApp.publication', ['ngRoute','720kb.datepicker']);


angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'ngWYSIWYG',
    'ngAnimate',
  'myApp.accueil',
  'myApp.actualite',
  'myApp.header',
  'myApp.publication',
  'myApp.departement',
  'myApp.personnel',
  'myApp.concours',
  'myApp.diplome',
  'myApp.organisation',
  'angularUtils.directives.dirPagination',
    'angular-loading-bar'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/accueil'});
      $routeProvider.when('/us', {
        templateUrl: template_url+'us.html',
        title:"Equipe de Réalisation"
      })
}])
    .config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar=true;
      //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading ...</span>';
      cfpLoadingBarProvider.latencyThreshold =0;
    }])

    .run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
      });
    }]);
