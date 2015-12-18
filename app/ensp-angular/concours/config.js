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
                title: "Nos Concours",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Nos Concours',
                    parent:"accueil"
                }
            })
            .state('formulaire-concours-niveau-1', {
                url: "/formulaire-concours-niveau-1/:action/:id?",
                templateUrl: template_url + 'concours/formulaire-concours.html',
                controller: 'FormulaireConcoursNiveau1Ctrl',
                title: "Inscription concours niveau 1",
                params: {
                    id: {squash: true, value: null}
                },
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Inscription au concours niveau 1',
                    parent:"concours"
                }
            })
            .state('formulaire-concours-niveau-3', {
                url: "/formulaire-concours-niveau-3/:action/:id?",
                templateUrl: template_url + 'concours/formulaire-concours-niveau-3.html',
                controller: 'FormulaireConcoursNiveau3Ctrl',
                title: "Inscription concours niveau 3",
                params: {
                    id: {squash: true, value: null}
                },
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Inscription au concours niveau 3',
                    parent:"concours"
                }
            })
            .state('liste-candidat', {
                url: "/liste-candidat/:niveau",
                templateUrl: template_url + 'concours/liste-candidat.html',
                controller: 'ListeCandidatCtrl',
                title: "Liste des Candidats",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des candidats',
                    parent:"concours"
                }
            })

}]);