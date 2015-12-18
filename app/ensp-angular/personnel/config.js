/**
 * Created by Thedward on 27/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module personnel
 *****************************************************************************************************************/
app_personnel

    .config(['$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider) {
            $stateProvider
                .state('liste-personnel', {
                    url: "/liste-personnel/:categorie",
                    templateUrl:  template_url+'personnel/liste-personnel.html',
                    controller:'ListePersonnelCtrl',
                    title:"Liste du personnel",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Nos enseignants',
                        parent:"accueil"
                    }
                })
                .state('personnel', {
                    url: "/personnel/:nom :prenom",
                    templateUrl:   template_url+'personnel/personnel.html',
                    controller:'PersonnelCtrl',
                    title:"Espace personnel",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Personnel',
                        parent:"liste-enseignant"
                    }
                })
                .state('formulaire-personnel', {
                    url: "/formulaire-personnel/:id?",
                    templateUrl:  template_url+'personnel/formulaire-personnel.html',
                    controller:'FormulairePersonnelCtrl',
                    params: {
                        id: { squash: true, value: null }
                    },
                    title:"Formulaire du personnel",
                    access: {
                        loginRequired: true,
                        requiredPermissions: ['Admin', 'UserManager'],
                        permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Edition d\'enseignant',
                        parent:"liste-enseignant"
                    }
                });
            $urlRouterProvider.otherwise( '/liste-personnel');

    }]);