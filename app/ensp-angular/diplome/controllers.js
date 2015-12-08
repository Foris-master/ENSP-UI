/**
 * Created by Thedward on 05/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Diplome
 *****************************************************************************************************************/
app_diplome
    .controller('DiplomeCtrl', function($scope,DiplomeFactory) {

        $scope.par_page=15;
        $scope.loadDiplome=function(){
            DiplomeFactory.getDiplomes().then(
                function(data){

                    $scope.diplomes=data;

                    console.log($scope.diplomes);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadDiplome();
        }

        $scope.detailPersonne=function(d){
            $("#detail").trigger('click');
            $scope.detail=d;
        }

        $scope.loadDiplome();
    })

