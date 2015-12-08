/**
 * Created by evari on 17/11/2015.
 */
'use strict';



/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
app_concours
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formulaire-concours-niveau-1/:action/:id?', {
        templateUrl: template_url+'concours/formulaire-concours.html',
        controller: 'FormulaireConcoursNiveau1Ctrl'
    })
        .when('/formulaire-concours-niveau-3/:action/:id?', {
            templateUrl: template_url+'concours/formulaire-concours-niveau-3.html',
            controller: 'FormulaireConcoursNiveau3Ctrl'
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