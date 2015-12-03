/**
 * Created by Thedward on 27/11/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module personnel
 *****************************************************************************************************************/
app_personnel

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/liste-personnel/:categorie', {
            templateUrl: template_url+'personnel/liste-personnel.html',
            controller: 'ListePersonnelCtrl',
            title:"Liste du personnel"
        })
            .when('/personnel/:id', {
                templateUrl: template_url+'personnel/personnel.html',
                controller: 'PersonnelCtrl',
                title:"Espace personnel"
            })

            .when('/formulaire-personnel/:id?', {
                templateUrl: template_url+'personnel/formulaire-personnel.html',
                controller: 'FormulairePersonnelCtrl'
            });
        $routeProvider.otherwise({redirectTo: '/liste-personnel'});
    }]);