/**
 * Created by Thedward on 05/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Diplôme
 *****************************************************************************************************************/
app_diplome

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/diplome', {
            templateUrl: template_url+'diplome/diplome.html',
            controller: 'DiplomeCtrl'
        })
        $routeProvider.otherwise({redirectTo: '/diplome'});
    }]);