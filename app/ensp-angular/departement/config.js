/**
 * Created by Thedward on 21/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Departements
 *****************************************************************************************************************/
app_departement

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('departement', {
                url: "/liste-departement",
                templateUrl: template_url+'departement/liste-departement.html',
                controller:'ListeDepartementCtrl'
            })
            .state('departement.detail', {
                url: "/departement/:cygle",
                templateUrl:  template_url+'departement/departement.html',
                controller: 'DepartementCtrl'
            })
            .state('departement.formulaire', {
                url: "/formulaire-departement/:id?",
                templateUrl:  template_url+'departement/formulaire-departement.html',
                controller: 'FormulaireDepartementCtrl',
                params: {
                    id: { squash: true, value: null }
                }
            });

        $urlRouterProvider.otherwise( '/liste-departement');
    }]);