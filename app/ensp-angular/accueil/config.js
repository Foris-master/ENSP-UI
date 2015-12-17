/**
 * Created by evari on 17/11/2015.
 */
'use strict';

var template_url='templates/'; // chemin vers le dossier des templates
/******************************************************************************************************************
 routes pour le module accueil
 *****************************************************************************************************************/
app_accueil

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('accueil', {
                url: "/accueil",
                templateUrl: template_url + 'accueil/accueil.html',
                controller: 'AccueilCtrl',
                title: "Accueil",
                ncyBreadcrumb: {
                    label: '',
                    parent:"etudiant"
                }
            })
    }]);


