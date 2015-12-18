/**
 * Created by Thedward on 08/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Organisation
 *****************************************************************************************************************/
app_organisation
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('organisation', {
                url: "/organisation",
                templateUrl: template_url+'organisation/organisation.html',
                controller: 'OrganisationCtrl',
                title:"Organisation",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Organisation',
                    parent:"accueil"
                }
            })
    }]);
