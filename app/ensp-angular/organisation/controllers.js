/**
 * Created by Thedward on 08/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Organisation
 *****************************************************************************************************************/
app_organisation
    .controller('OrganisationCtrl', function($scope,OrganisationFactory) {

        $scope.loadOrganisation=function(){
            OrganisationFactory.getOrganisations().then(
                function(data){

                    $scope.organisations=data;

                    console.log($scope.organisations);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadOrganisation();
        }

        $scope.loadOrganisation();
    })

