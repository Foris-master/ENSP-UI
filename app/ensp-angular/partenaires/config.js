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
                templateUrl: template_url+'partenaires/liste-partenaire.html',
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
                url: "/partenaire/:denomination",
                templateUrl:  template_url+'partenaires/partenaire.html',
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
                templateUrl:  template_url+'partenaires/formulaire-partenaire.html',
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
                url: "/formulaire-formation/:id?",
                templateUrl:  template_url+'partenaires/formulaire-formation.html',
                controller: 'FormulaireFormationCtrl',
                params: {
                    id: { squash: true, value: null }
                },
                title:"Devenir partenaire",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['Admin'],
                    permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Enregistrement d\'un partenaire',
                    parent:"liste-partenaire"
                }
            })
            .state('offre', {
                url: "/formulaire-stage/:id?",
                templateUrl:  template_url+'partenaires/formulaire-stage.html',
                controller: 'FormulaireOffreCtrl',
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