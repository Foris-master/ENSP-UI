/**
 * Created by Thedward on 05/12/2015.
 */
'use strict';


/******************************************************************************************************************
 routes pour le module Dipl�me
 *****************************************************************************************************************/
app_diplome
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('diplome', {
                url: "/diplome",
                templateUrl: template_url+'diplome/diplome.html',
                controller: 'DiplomeCtrl',
                title:"Nos dipl�m�s",
                access: {
                    loginRequired: false,
                    //requiredPermissions: ['Admin', 'UserManager'],
                    //permissionType: 'All'
                },
                ncyBreadcrumb: {
                    label: 'Nos dipl�m�s',
                    parent:"accueil"
                }
            })
    }]);



