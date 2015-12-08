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
                url: "/publication/:id",
                templateUrl: template_url+'publication/publication.html',
                controller:'PublicationCtrl'
            })
           .state('publication.formulaire', {
                        url: "/formulaire-publication/:id?",
                        templateUrl: template_url+'publication/formulaire-publication.html',
                        controller:'FormulairePublicationCtrl',
                        params: {
                            id: { squash: true, value: null }
                        }
                    })
            .state('publication.liste', {
                    url: "/liste-publication/:auteur?'",
                    templateUrl:  template_url+'publication/liste-publication.html',
                    controller:'ListePublicationCtrl',
                    params: {
                        auteur: { squash: true, value: null }
                    }
                });



}]);

