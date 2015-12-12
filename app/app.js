'use strict';

// Declare app level module which depends on views, and components
var template_url='templates/'; // chemin vers le dossier des templates
//definition de tout les modules
var app_accueil =angular.module('myApp.accueil', ['ui.router']);
var app_header =angular.module('myApp.header', ['ui.router']);
var app_actualite =angular.module('myApp.actualite', ['ui.router']);
var app_concours =angular.module('myApp.concours', ['ui.router','720kb.datepicker']);
var app_departement =angular.module('myApp.departement', ['ui.router']);
var app_personnel =angular.module('myApp.personnel', ['ui.router']);
var app_diplome =angular.module('myApp.diplome', ['ui.router']);
var app_organisation =angular.module('myApp.organisation', ['ui.router']);
var app_publication=angular.module('myApp.publication', ['ui.router','720kb.datepicker']);


angular.module('myApp', [
  'ui.router',
  'ngSanitize',
  'ngWYSIWYG',
    'ngAnimate',
    'ngMessages',
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
    'angular-loading-bar',
  'textAngular',
    'formly',
    'formlyBootstrap'
]).config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
      $urlRouterProvider.otherwise( '/accueil');
      $stateProvider.state('us', {
        url: "/us",
        templateUrl:  template_url+'us.html',
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
/*
$rootScope.$on('$stateChangeSuccess', function() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});*/
