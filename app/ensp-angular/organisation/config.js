/**
 * Created by Thedward on 08/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Organisation
 *****************************************************************************************************************/
app_organisation

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organisation', {
            templateUrl: template_url+'organisation/organisation.html',
            controller: 'OrganisationCtrl'
        })
        $routeProvider.otherwise({redirectTo: '/organisation'});
    }]);