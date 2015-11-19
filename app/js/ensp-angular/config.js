/**
 * Created by evari on 17/11/2015.
 */
'use strict';

var template_url='templates/'; // chemin vers le dossier des templates
/******************************************************************************************************************
 routes pour le module accueil
 *****************************************************************************************************************/
angular.module('myApp.accueil', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/accueil', {
            templateUrl: template_url+'accueil/accueil.html',
            controller: 'AccueilCtrl'
        });
    }]);


/******************************************************************************************************************
                            routes pour le module articles
 *****************************************************************************************************************/
angular.module('myApp.articles', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/articles', {
            templateUrl: template_url+'articles/articles.html',
            controller: 'View2Ctrl'
        })
            .when('/presentation', {
                templateUrl: template_url+'articles/presentation.html',
                controller: 'View2Ctrl'
            });




    }]);

/******************************************************************************************************************
 routes pour le module actualites
 *****************************************************************************************************************/
angular.module('myApp.actualite', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/liste-actualite', {
            templateUrl: template_url+'articles/liste-actualite.html',
            controller: 'ListeActualiteCtrl'
        })
            .when('/actualite/:id', {
                templateUrl: template_url+'articles/actualite.html',
                controller: 'ActualiteCtrl'
            });




    }]);


/******************************************************************************************************************
                                routes pour le module publications
 *****************************************************************************************************************/
angular.module('myApp.publication', ['ngRoute','720kb.datepicker'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/publication/:id', {
        templateUrl: template_url+'publication/publication.html',
        controller: 'PublicationCtrl'
    });
    $routeProvider.when('/formulaire-publication/:id?', {
        templateUrl: template_url+'publication/formulaire-publication.html',
        controller: 'FormulairePublicationCtrl'
    });

    $routeProvider.when('/liste-publication/:auteur?', {
        templateUrl: template_url+'publication/liste-publication.html',
        controller: 'ListePublicationCtrl'
    });



}]);

/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
angular.module('myApp.concours', ['ngRoute','720kb.datepicker'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formulaire-concours/', {
        templateUrl: template_url+'concours/formulaire-concours.html',
        controller: 'FormulaireConcoursCtrl'
    })

}]);