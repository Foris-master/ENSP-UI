/**
 * Created by Thedward on 18/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Laboratoire
 *****************************************************************************************************************/
app_laboratoire
    .controller('ListeLaboratoireCtrl', ['$scope','LaboratoireFactory',
    function($scope,LaboratoireFactory) {


        $scope.loadLaboratoire=function(){
            LaboratoireFactory.getLaboratoires().then(
                function(data){

                    $scope.par_page=7;
                    $scope.laboratoires=data;

                    console.log($scope.laboratoires);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadLaboratoire();
        }

        $scope.loadLaboratoire();
    }])
    .controller('LaboratoireCtrl', ['$scope','$stateParams','LaboratoireFactory',
    function($scope,$stateParams,LaboratoireFactory) {
        //recuperation de la laboratoire
        LaboratoireFactory.getLaboratoireObjet({nom:$stateParams.nom}).then(
            function(data){
                $scope.laboratoire=data;
                console.log(data.projets);
                $('#myCarousel').carousel({
                    interval:   12000
                });
                $scope.par_page=6;

            },function(msg){
                console.log(msg);
            }
        );


    }]);