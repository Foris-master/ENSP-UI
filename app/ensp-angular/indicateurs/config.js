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
				title:"Nos Indicateurs",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Nos indicateurs',
                    parent:"accueil"
                }
            });

        $urlRouterProvider.otherwise( '/indicateur');
    }]);