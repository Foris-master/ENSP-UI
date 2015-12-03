/**
 * Created by evari on 17/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module actualites
 *****************************************************************************************************************/
app_actualite

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/liste-actualite', {
            templateUrl: template_url+'actualite/liste-actualite.html',
            controller: 'ListeActualiteCtrl'
        })
            .when('/actualite/:id', {
                templateUrl: template_url+'actualite/actualite.html',
                controller: 'ActualiteCtrl'
            })
         .when('/actualite', {
            templateUrl: template_url+'actualite/actualite.html',
            controller: 'View2Ctrl'
        })
            .when('/presentation', {
                templateUrl: template_url+'actualite/presentation.html',
                controller: 'View2Ctrl',
                title:"Présentation"
            })
            .when('/formulaire-actualite/:id?', {
                templateUrl: template_url+'actualite/formulaire-article.html',
                controller: 'FormulaireArticleCtrl'
            })
            .when('/article', {
                templateUrl: template_url+'actualite/articles.html'
            });




    }]);


