/**
 * Created by evari on 17/11/2015.
 */
'use strict';

var template_url='templates/'; // chemin vers le dossier des templates
/******************************************************************************************************************
 routes pour le module accueil
 *****************************************************************************************************************/
angular.module('myApp.accueil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/accueil', {
            templateUrl: template_url+'accueil/accueil.html',
            controller: 'AccueilCtrl'
        });
    }]);


