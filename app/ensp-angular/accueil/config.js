/**
 * Created by evari on 17/11/2015.
 */
'use strict';

var template_url='templates/'; // chemin vers le dossier des templates
/******************************************************************************************************************
 routes pour le module accueil
 *****************************************************************************************************************/
app_accueil

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('accueil', {
                url: "/accueil",
                templateUrl: template_url + 'accueil/accueil.html',
                controller: 'AccueilCtrl',
                title : 'Accueil',
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Acceuil'
                }
            })
            .state('recherche', {
                url: "/recherche",
                templateUrl: template_url + 'accueil/recherche.html',
                controller: 'ListeActualiteCtrl',
                title : 'Recherche',
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Acceuil'
                }
            })
    }]);


