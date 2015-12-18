/**
 * Created by Thedward on 18/121/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Laboratoires
 *****************************************************************************************************************/
app_laboratoire

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('liste-laboratoire', {
                url: "/liste-laboratoire",
                templateUrl: template_url+'laboratoire/liste-laboratoire.html',
                controller:'ListeLaboratoireCtrl',
				title:"Laboratoires de recherches",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Nos laboratoires de recherches',
                    parent:"accueil"
                }
            })
            .state('laboratoire', {
                url: "/laboratoire/:nom",
                templateUrl:  template_url+'laboratoire/laboratoire.html',
                controller: 'LaboratoireCtrl',
				title:"Laboratoire",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Laboratoire',
                    parent:"liste-laboratoire"
                }
            })
            .state('formulaire-laboratoire', {
                url: "/formulaire-laboratoire/:id?",
                templateUrl:  template_url+'laboratoire/formulaire-laboratoire.html',
                controller: 'FormulaireLaboratoireCtrl',
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
                    label: 'enregistrement d\'un laboratoire',
                    parent:"liste-laboratoire"
                }
            });

        $urlRouterProvider.otherwise( '/liste-laboratoire');
    }]);