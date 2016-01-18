/**
 * Created by evari on 17/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module articles
 *****************************************************************************************************************/
app_article
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('liste-article', {
                url: "/liste-article/:categorie",
                templateUrl: template_url + 'article/liste-article.html',
                controller: 'ListeArticleCtrl',
                title: "Nos Actualités",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des articles',
                    parent:"accueil"
                }
            })
            .state('liste-actualite', {
                url: "/liste-actualite",
                templateUrl: template_url + 'article/liste-article.html',
                controller: 'ListeActualiteCtrl',
                title: "Nos Actualités",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des actualités',
                    parent:"accueil"
                }
            })
            .state('article', {
                url: "/article/:titre",
                templateUrl: template_url + 'article/article.html',
                controller: 'ArticleCtrl',
                title: "Actualités",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des actualités',
                    parent:"accueil"
                }
            })
            .state('presentation', {
                url: "/presentation",
                templateUrl: template_url + 'article/presentation.html',
                controller: 'PresentationCtrl',
                title: "Presentation ",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des actualités',
                    parent:"accueil"
                }
            })
            .state('formulaire-article', {
                url: "/formulaire-article/:id?",
                templateUrl: template_url + 'article/formulaire-article.html',
                controller: 'FormulaireArticleCtrl',
                title: "Formulaire articles",
                params: {
                    id: { squash: true, value: null }
                },
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Liste des actualités',
                    parent:"accueil"
                }
            });

    }]);


