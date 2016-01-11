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
    .controller('FormulairePartenaireCtrl', ['$scope','EcoleFactory',
        function($scope,EcoleFactory) {


            $scope.loadEcole=function(){
                EcoleFactory.getEcoles().then(
                    function(data){

                        $scope.ecoles=data
                        //console.log(data);

                    },function(msg){
                        console.log(msg);
                    }
                );

            }


            $scope.loadEcole();
        }])
    .controller('FormulaireFormationCtrl', ['$scope','PartenaireFactory',
        function($scope,PartenaireFactory) {

            $scope.loadPartenaire=function(){
                PartenaireFactory.getPartenaires().then(
                    function(data){
                        $scope.institutions=data;
                    },function(msg){
                        console.log(msg);
                    }
                );

            }
            $scope.loadPartenaire();
        }])
    .controller('FormulaireOffreCtrl', ['$scope','PartenaireFactory',
        function($scope,PartenaireFactory) {
            var stage=$(".stage");
            var emploi=$(".emploi");
            $("#type").change(function(e){
                var v=$(this).val();
                if(v=='emploi'){
                    $("#cStage").empty();
                    $("#cEmploi").append(emploi);
                }
                else if(v=='stage'){
                    $("#cEmploi").empty();
                    $("#cStage").append(stage);
                }
                else{
                    $("#cEmploi").empty();
                    $("#cStage").empty();
                }
            })
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