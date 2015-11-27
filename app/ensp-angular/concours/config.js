/**
 * Created by evari on 17/11/2015.
 */
'use strict';



/******************************************************************************************************************
                                    routes pour le module  concours
 *****************************************************************************************************************/
app_concours
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formulaire-concours/', {
        templateUrl: template_url+'concours/formulaire-concours.html',
        controller: 'FormulaireConcoursCtrl'
    })

}]);