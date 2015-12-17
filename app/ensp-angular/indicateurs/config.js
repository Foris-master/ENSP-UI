/**
 * Created by Thedward on 14/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Indicateurs
 *****************************************************************************************************************/
app_indicateur

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('indicateur', {
                url: "/indicateur",
                templateUrl:  template_url+'indicateurs/indicateurs.html',
                controller: 'IndicateurCtrl',
				title:"Nos Indicateurs"
            });

        $urlRouterProvider.otherwise( '/indicateur');
    }]);