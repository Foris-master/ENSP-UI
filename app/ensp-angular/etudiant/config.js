/**
 * Created by Thedward on 14/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module etudiant
 *****************************************************************************************************************/
app_etudiant

    .config(['$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider) {
            $stateProvider
                .state('liste-etudiant', {
                    url: "/liste-etudiant/:categorie",
                    templateUrl:  template_url+'etudiant/liste-etudiant.html',
                    controller:'ListeEtudiantCtrl',
                    title:"Liste des étudiants",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Nos étudiants',
                        parent:"accueil"
                    }
                })
                .state('etudiant', {
                    url: "/etudiant/:nom :prenom",
                    templateUrl:   template_url+'etudiant/etudiant.html',
                    controller:'EtudiantCtrl',
                    title:"Espace étudiant",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Liste des étudiants',
                        parent:"liste-etudiant"
                    }
                })
                .state('association', {
                    url: "/association/:cygle",
                    templateUrl:   template_url+'etudiant/association.html',
                    controller:'AssociationCtrl',
                    title:"Association des étudiants",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Association des étudiants',
                        parent:"liste-etudiant"
                    }
                })
                .state('activites', {
                    url: "/activites/:titre",
                    templateUrl:   template_url+'etudiant/activites.html',
                    controller:'ActivitesCtrl',
                    title:"Activités des étudiants",
                    access: {
                        loginRequired: false,
                        //requiredPermissions: ['Admin', 'UserManager'],
                        //permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Activités des étudiants',
                        parent:"liste-etudiant"
                    }
                })
                .state('formulaire-etudiant', {
                    url: "/formulaire-etudiant/:id?",
                    templateUrl:  template_url+'etudiant/formulaire-etudiant.html',
                    controller:'FormulaireEtudiantCtrl',
                    params: {
                        id: { squash: true, value: null }
                    },
                    title:"Formulaire d'enregistrement d'un étudiant",
                    access: {
                        loginRequired: true,
                        requiredPermissions: ['Admin', 'UserManager'],
                        permissionType: 'All'
                    },
                    ncyBreadcrumb: {
                        label: 'Edition d\'étudiants',
                        parent:"liste-etudiant"
                    }
                });
            $urlRouterProvider.otherwise( '/liste-etudiant');

    }]);