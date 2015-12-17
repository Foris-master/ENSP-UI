/**
 * Created by evari on 17/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module actualites
 *****************************************************************************************************************/
app_actualite
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('liste-actualite', {
                url: "/liste-actualite",
                templateUrl: template_url + 'actualite/liste-actualite.html',
                controller: 'ListeActualiteCtrl',
                title: "Nos Actualités",
                access: {
                    loginRequired: true,
                    requiredPermissions: ['Admin', 'UserManager'],
                    permissionType: 'AtLeastOne'
                }
            })
            .state('actualite', {
                url: "/actualite/:id",
                templateUrl: template_url + 'actualite/actualite.html',
                controller: 'ActualiteCtrl',
                title: "Actualités"
            })
            .state('presentation', {
                url: "/presentation",
                templateUrl: template_url + 'actualite/presentation.html',
                //controller: 'PresentationCtrl',
                title: "Presentation "
            })
            .state('formulaire-actualite', {
                url: "/formulaire-actualite/:id?",
                templateUrl: template_url + 'actualite/formulaire-article.html',
                controller: 'FormulaireActualiteCtrl',
                title: "Formulaire actualités",
                params: {
                    id: { squash: true, value: null }
                }
            })
            .state('article', {
                url: "/article",
                templateUrl: template_url + 'actualite/article.html',
                controller: 'ListeActualiteCtrl',
                title: "Article"
            })

    }]);


