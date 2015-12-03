/**
 * Created by Thedward on 21/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Departements
 *****************************************************************************************************************/
app_departement

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/liste-departement', {
            templateUrl: template_url+'departement/liste-departement.html',
            controller: 'ListeDepartementCtrl'
        })
            .when('/departement/:cygle', {
                templateUrl: template_url+'departement/departement.html',
                controller: 'DepartementCtrl'
            })

            .when('/formulaire-departement/:id?', {
                templateUrl: template_url+'departement/formulaire-departement.html',
                controller: 'FormulaireDepartementCtrl'
            });
        $routeProvider.otherwise({redirectTo: '/liste-departement'});
    }]);