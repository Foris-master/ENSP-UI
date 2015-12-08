/**
 * Created by evari on 17/11/2015.
 */
'use strict';



/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
app_concours
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('concours', {
                url: "/concours",
                templateUrl: template_url + 'concours/concours.html',
                controller: 'ConcoursCtrl',
                title: "Nos Concours"
            })
            .state('concours-formulaire', {
                url: "/formulaire-concours-niveau-1/:action/:id?",
                templateUrl: template_url + 'concours/formulaire-concours.html',
                controller: 'FormulaireConcoursNiveau1Ctrl',
                title: "Inscription concours niveau 1",
                params: {
                    id: {squash: true, value: null}
                }
            })
            .state('concours-formulaire', {
                url: "/formulaire-concours-niveau-3/:action/:id?",
                templateUrl: template_url + 'concours/formulaire-concours-niveau-3.html',
                controller: 'FormulaireConcoursNiveau3Ctrl',
                title: "Inscription concours niveau 3",
                params: {
                    id: {squash: true, value: null}
                }
            })
            .state('concours-candidats', {
                url: "/liste-candidat/:niveau",
                templateUrl: template_url + 'concours/liste-candidat.html',
                controller: 'ListeCandidatCtrl',
                title: "Liste des Candidats"
            })

    }])