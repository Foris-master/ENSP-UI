/**
 * Created by evari on 17/11/2015.
 */
'use strict';



/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
app_concours
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formulaire-concours/:niveau/:action/:id?', {
        templateUrl: template_url+'concours/formulaire-concours.html',
        controller: 'FormulaireConcoursCtrl'
    })
        .when('/concours/', {
            templateUrl: template_url+'concours/concours.html',
            controller: 'ConcoursCtrl',
            title:"Nos Concours"
        })
        .when('/liste-candidat/:niveau', {
            templateUrl: template_url+'concours/liste-candidat.html',
            controller: 'ListeCandidatCtrl',
            title:"Liste des Candidats"
        })

}]);