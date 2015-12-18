/**
 * Created by evari on 17/11/2015.
 */
'use strict';




/******************************************************************************************************************
                                routes pour le module publications
 *****************************************************************************************************************/
app_publication

.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('publication', {
                url: "/publication/:titre",
                templateUrl: template_url+'publication/publication.html',
                controller:'PublicationCtrl',
				title:"Publication",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Publication',
                    parent:"liste-publication"
                }
            })
           .state('formulaire-publication', {
                url: "/formulaire-publication/:id?",
                templateUrl: template_url+'publication/formulaire-publication.html',
                controller:'FormulairePublicationCtrl',
                params: {
                    id: { squash: true, value: null }
                },
                title:"Formulaire de publication",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['User'],
                    permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Edition d\'une publication',
                    parent:"liste-publication"
                }
            })
            .state('liste-publication', {
                url: "/liste-publication/:auteur?'",
                templateUrl:  template_url+'publication/liste-publication.html',
                controller:'ListePublicationCtrl',
                params: {
                    auteur: { squash: true, value: null }
                },
                title:"Liste des publications",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des publications',
                    parent:"accueil"
                }
            });



}]);

