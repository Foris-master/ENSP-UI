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
                .state('personnel', {
                    url: "/liste-personnel/:categorie",
                    templateUrl:  template_url+'personnel/liste-personnel.html',
                    controller:'ListePersonnelCtrl',
                    title:"Liste du personnel"
                })
                .state('personnel.detail', {
                    url: "/personnel/:id",
                    templateUrl:   template_url+'personnel/personnel.html',
                    controller:'PersonnelCtrl',
                    title:"Espace personnel"
                })
                .state('personnel.formulaire', {
                    url: "/formulaire-personnel/:id?",
                    templateUrl:  template_url+'personnel/formulaire-personnel.html',
                    controller:'FormulairePersonnelCtrl',
                    params: {
                        id: { squash: true, value: null }
                    }
                });
            $urlRouterProvider.otherwise( '/liste-personnel');

    }]);