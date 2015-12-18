/**
 * Created by evari on 17/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module publication
 *****************************************************************************************************************/
app_departement

    .controller('FormulairePublicationCtrl',['$scope','$stateParams','$location','PublicationFactory','$filter',
    function($scope,$stateParams,$location,PublicationFactory,$filter) {
        $scope.new_publication = false;
        var id=$stateParams.titre || null;
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
    }])

    .controller('ListePublicationCtrl', ['$scope','$stateParams','PublicationFactory','$filter',
    function($scope,$stateParams,PublicationFactory,$filter) {
        $scope.auteur =$stateParams.auteur || null;
        $scope.par_page = 15;

        $scope.filtrePublication=function(valeur){
            $scope.publications=$filter('filter')($scope.publications,{auteur:auteur},true);
        }

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
    }])
    .controller('PublicationCtrl', ['$scope','$stateParams','PublicationFactory',
    function($scope,$stateParams,PublicationFactory) {
        //recuperation de la publication
        PublicationFactory.getPublication({titre:$stateParams.titre}).then(
            function(data){

                $scope.publication=data;

            },function(msg){
                console.log(msg);
            }
        );

    }]);




