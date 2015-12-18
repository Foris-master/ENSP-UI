/**
 * Created by Thedward on 21/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Departements
 *****************************************************************************************************************/
app_departement

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('liste-departement', {
                url: "/liste-departement",
                templateUrl: template_url+'departement/liste-departement.html',
                controller:'ListeDepartementCtrl',
				title:"Nos Départements",
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
            .state('departement', {
                url: "/departement/:cygle",
                templateUrl:  template_url+'departement/departement.html',
                controller: 'DepartementCtrl',
				title:"Espace Département",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'département',
                    parent:"liste-departement"
                }
            })
            .state('formulaire-departement', {
                url: "/formulaire-departement/:id?",
                templateUrl:  template_url+'departement/formulaire-departement.html',
                controller: 'FormulaireDepartementCtrl',
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
                    parent:"liste-departement"
                }
            });

        $urlRouterProvider.otherwise( '/liste-departement');
    }]);