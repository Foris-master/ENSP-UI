/**
 * Created by Thedward on 18/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Partenaire
 *****************************************************************************************************************/
app_partenaire
    .controller('ListePartenaireCtrl', ['$scope','PartenaireFactory',
    function($scope,PartenaireFactory) {


        $scope.loadPartenaire=function(){
            PartenaireFactory.getPartenaires().then(
                function(data){

                    $scope.par_page=7;
                    $scope.partenaires=data;

                    console.log($scope.partenaires);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadPartenaire();
        }

        $scope.loadPartenaire();
    }])
    .controller('PartenaireCtrl', ['$scope','$stateParams','PartenaireFactory',
    function($scope,$stateParams,PartenaireFactory) {
        //recuperation de la partenaire
        PartenaireFactory.getPartenaireObjet({cygle:$stateParams.cygle}).then(
            function(data){
                $scope.partenaire=data;
                //console.log(data);
                $('#myCarousel').carousel({
                    interval:   7000
                });
                $scope.par_page=6;

            },function(msg){
                console.log(msg);
            }
        );

    }]);