/**
 * Created by Thedward on 27/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module personnel
 *****************************************************************************************************************/
angular.module('myApp.personnel', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/liste-pesonnel', {
            templateUrl: template_url+'pesonnel/liste-pesonnel.html',
            controller: 'ListePesonnelCtrl'
        })
            .when('/pesonnel/:id', {
                templateUrl: template_url+'pesonnel/pesonnel.html',
                controller: 'PesonnelCtrl'
            })

            .when('/formulaire-pesonnel/:id?', {
                templateUrl: template_url+'pesonnel/formulaire-pesonnel.html',
                controller: 'FormulairePesonnelCtrl'
            });
        $routeProvider.otherwise({redirectTo: '/liste-pesonnel'});
    }]);