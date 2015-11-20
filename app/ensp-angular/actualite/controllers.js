/**
 * Created by evari on 17/11/2015.
 */





/******************************************************************************************************************
 controlleur pour le module actualité
 *****************************************************************************************************************/
angular.module('myApp.actualite')
    .controller('ListeActualiteCtrl', function($scope,ActualiteFactory,$filter,Pagination) {

        $scope.pagination = Pagination.getNew(15);


        $scope.loadActualite=function(){
            ActualiteFactory.getActualites().then(
                function(data){

                    $scope.totalPages=data.length;
                    $scope.actualites=data;
                    $scope.pagination.numPages = Math.ceil(data.length/$scope.pagination.perPage);
                    console.log($scope.actualites);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadActualite();
        }

        $scope.loadActualite();
    })
    .controller('ActualiteCtrl', function($scope,$routeParams,ActualiteFactory) {
        //recuperation de la actualite
        ActualiteFactory.getActualite($routeParams.id).then(
            function(data){

                $scope.actualite=data;
                console.log(data);

            },function(msg){
                console.log(msg);
            }
        );

    })

.controller('View2Ctrl', function() {

    })
.controller('FormulaireArticleCtrl', function($scope,$routeParams,$location,ActualiteFactory,$filter) {
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
            ActualiteFactory.addActualite($scope.new_article);
            // $location.path('/liste-publication')
            console.log($scope.new_article);
        }else{
            console.log('veullez remplir les champs');
        }

        console.log($scope.new_article);
    }
});

