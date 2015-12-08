/**
 * Created by evari on 17/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module actualites
 *****************************************************************************************************************/
app_actualite

    .config(['$stateProvider', function($stateProvider)  {
        $stateProvider
            .state('actualite', {
                url: "/liste-actualite",
                templateUrl:  template_url+'actualite/liste-actualite.html',
                controller:'ListeActualiteCtrl'
            })
            .state('actualite.detail', {
                url: "/actualite/:id",
                templateUrl:   template_url+'actualite/actualite.html',
                controller:'ActualiteCtrl'
            })
            .state('actualite.actualite', {
                url: "/actualite",
                templateUrl:  template_url+'actualite/actualite.html',
                controller:'View2Ctrl'
            })
             .state('actualite.presentation', {
                url: "/presentation",
                templateUrl:   template_url+'actualite/presentation.html',
                controller:'View2Ctrl',
                title:"Présentation"
            })
            .state('actualite-formulaire', {
                url: "/formulaire-actualite/:id",
                templateUrl:  template_url+'actualite/formulaire-article.html',
                controller:'FormulaireArticleCtrl',
                params: {
                    id: { squash: true, value: null }
                }
            })
            .state('article', {
                url: "/article",
                templateUrl: template_url+'actualite/articles.html'

            });




    }]);


