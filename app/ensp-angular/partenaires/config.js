/**
 * Created by Thedward on 18/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Partenaires
 *****************************************************************************************************************/
app_partenaire

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('liste-partenaire', {
                url: "/liste-partenaire",
                templateUrl: template_url+'partenaire/liste-partenaire.html',
                controller:'ListePartenaireCtrl',
				title:"Nos Partenaires",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des départements',
                    parent:"accueil"
                }
            })
            .state('partenaire', {
                url: "/partenaire/:cygle",
                templateUrl:  template_url+'partenaire/partenaire.html',
                controller: 'PartenaireCtrl',
				title:"Espace Partenaire",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'département',
                    parent:"liste-partenaire"
                }
            })
            .state('devenir-partenaire', {
                url: "/formulaire-partenaire/:id?",
                templateUrl:  template_url+'partenaire/formulaire-partenaire.html',
                controller: 'FormulairePartenaireCtrl',
                params: {
                    id: { squash: true, value: null }
                },
				title:"Formulaire Déparement",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['Admin'],
                    permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'enregistrement d\'un département',
                    parent:"liste-partenaire"
                }
            })
            .state('demander-formation', {
                url: "/formulaire-partenaire/:id?",
                templateUrl:  template_url+'partenaire/formulaire-partenaire.html',
                controller: 'FormulairePartenaireCtrl',
                params: {
                    id: { squash: true, value: null }
                },
                title:"Formulaire Déparement",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['Admin'],
                    permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'enregistrement d\'un département',
                    parent:"liste-partenaire"
                }
            })
            .state('offre', {
                url: "/formulaire-partenaire/:id?",
                templateUrl:  template_url+'partenaire/formulaire-partenaire.html',
                controller: 'FormulairePartenaireCtrl',
                params: {
                    id: { squash: true, value: null }
                },
                title:"Formulaire Déparement",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['Admin'],
                    permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'enregistrement d\'un département',
                    parent:"liste-partenaire"
                }
            });

        $urlRouterProvider.otherwise( '/liste-partenaire');
    }]);