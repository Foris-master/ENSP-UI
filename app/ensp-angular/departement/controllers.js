/**
 * Created by Thedward on 21/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Departement
 *****************************************************************************************************************/
angular.module('myApp.departement')
    .controller('ListeDepartementCtrl', function($scope,DepartementFactory,$filter,Pagination) {

        $scope.pagination = Pagination.getNew(15);


        $scope.loadDepartement=function(){
            DepartementFactory.getDepartements().then(
                function(data){

                    $scope.totalPages=data.length;
                    $scope.departements=data;
                    $scope.pagination.numPages = Math.ceil(data.length/$scope.pagination.perPage);
                    console.log($scope.departements);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadDepartement();
        }

        $scope.loadDepartement();
    })
    .controller('DepartementCtrl', function($scope,$routeParams,DepartementFactory) {
        //recuperation de la departement
        DepartementFactory.getDepartement($routeParams.id).then(
            function(data){

                $scope.departement=data;
                console.log(data);

            },function(msg){
                console.log(msg);
            }
        );

    })


.controller('FormulaireArticleCtrl', function($scope,$routeParams,$location,DepartementFactory,$filter) {
    $scope.new_article = false;

    $("#txtEditor").Editor();
    var id=$routeParams.id || null;
    if(id!=null)// Edition d'une publication
    {
        $scope.type="Edition de Concours";
    }
    else // creation d'une publication
    {
        $scope.type="Nouvel Article";
    }
    $scope.save_article = function(){

        if($scope.new_article!=false){
            $scope.new_article.contenue=$(".Editor-editor").html();
            DepartementFactory.addDepartement($scope.new_article);
            // $location.path('/liste-publication')
            console.log($scope.new_article);
        }else{
            console.log('veullez remplir les champs');
        }

        console.log($scope.new_article);
    }
});

