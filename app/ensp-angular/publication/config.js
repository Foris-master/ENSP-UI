/**
 * Created by evari on 17/11/2015.
 */
'use strict';




/******************************************************************************************************************
                                routes pour le module publications
 *****************************************************************************************************************/
angular.module('myApp.publication', ['ngRoute','720kb.datepicker'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/publication/:id', {
        templateUrl: template_url+'publication/publication.html',
        controller: 'PublicationCtrl'
    });
    $routeProvider.when('/formulaire-publication/:id?', {
        templateUrl: template_url+'publication/formulaire-publication.html',
        controller: 'FormulairePublicationCtrl'
    });

    $routeProvider.when('/liste-publication/:auteur?', {
        templateUrl: template_url+'publication/liste-publication.html',
        controller: 'ListePublicationCtrl'
    });



}]);

