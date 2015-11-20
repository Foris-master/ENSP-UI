/**
 * Created by evari on 17/11/2015.
 */
'use strict';



/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
angular.module('myApp.concours', ['ngRoute','720kb.datepicker'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formulaire-concours/', {
        templateUrl: template_url+'concours/formulaire-concours.html',
        controller: 'FormulaireConcoursCtrl'
    })

}]);