/**
 * Created by evari on 17/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module publication
 *****************************************************************************************************************/
app_departement

    .controller('FormulairePublicationCtrl', function($scope,$routeParams,$location,PublicationFactory,$filter) {
        $scope.new_publication = false;
        var id=$routeParams.id || null;
        if(id!=null)// Edition d'une publication
        {
            $scope.type="Edition de Publication";
        }
        else // creation d'une publication
        {
            $scope.type="Nouvelle Publication";
        }
        $scope.save_publication = function(){
            if($scope.new_publication!=false){
                PublicationFactory.addPublication($scope.new_publication);
                $location.path('/liste-publication')
            }else{
                console.log('veullez remplir les champs');
            }

            console.log($scope.new_publication);
        }
    })

    .controller('ListePublicationCtrl', function($scope,$routeParams,PublicationFactory,$filter) {
        $scope.auteur =$routeParams.auteur || null;
        $scope.par_page = 15;


        $scope.loadPublication=function(){
            PublicationFactory.getPublications().then(
                function(data){


                    if($scope.auteur!=null)// On affiche les publications d'un auteur
                    {
                        $scope.publications=$filter('filter')(data,{auteur:$scope.auteur},true);
                        $scope.all=true;
                    }
                    else // on affiche toutes les publications
                    {
                        $scope.publications=data;

                    }

                },function(msg){
                    console.log(msg);
                }
            );
            /*serviceAjax.publication($scope.currentPage).success(function(data){

            })*/
        }

        $scope.changementPage=function(){
            $scope.loadPublication();
        }

        $scope.loadPublication();
    })
    .controller('PublicationCtrl', function($scope,$routeParams,PublicationFactory) {
        //recuperation de la publication
        PublicationFactory.getPublication($routeParams.id).then(
            function(data){

                $scope.publication=data;

            },function(msg){
                console.log(msg);
            }
        );

    });




