'use strict';

// Declare app level module which depends on views, and components
var template_url='templates/'; // chemin vers le dossier des templates
//definition de tout les modules
var app_auth =angular.module('myApp.auth', ['ui.router']);
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
    'myApp.auth',
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
]).run(['$rootScope','$state','$location','AuthFactory',function($rootScope,$state,$location,AuthFactory){
    /* ceci est le main de l'application */
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
        // mise a jour du title de la page de maniere automatique
        $rootScope.title=toState.title;
         $rootScope.currentUser={};
         $rootScope.currentUser.roles = [{name:'Admin'},{name:'UserManager '}];

        AuthFactory.hasAuthorization(toState.access).then(
            function(data){
                console.info('authorize');
            },function(msg){
                console.error(msg);
                $state.transitionTo('login');
            }
        );


        /*if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
            /!*loginModal()
                .then(function () {
                    return $state.go(toState.name, toParams);
                })
                .catch(function () {
                    return $state.go('accueil');
                });*!/


                // Just provide a template url, a controller and call 'showModal'.templateUrl: template_url+'auth/loginModalTemplate.html',



            $state.transitionTo('login');
        }*/
    });
}])



    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
      $urlRouterProvider.otherwise( '/accueil');
      $stateProvider.state('us', {
        url: "/us",
        templateUrl:  template_url+'us.html',
        title:"Equipe de Réalisation"
        
      }).state('login', {
        url: "/unauthorize",
        templateUrl:  template_url+'403.html',
        title:"Non autorise",
        access:{requiresLogin:false}
      })
}])

    .config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar=true;
      //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading ...</span>';
      cfpLoadingBarProvider.latencyThreshold =0;
    }]);

/*
$rootScope.$on('$stateChangeSuccess', function() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});*/
