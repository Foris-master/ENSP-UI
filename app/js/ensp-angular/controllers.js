/**
 * Created by evari on 17/11/2015.
 */



/******************************************************************************************************************
 controlleur pour le module header
 *****************************************************************************************************************/
angular.module('myApp.header', ['ngRoute'])


    .controller('headerCtrl', function($scope) {
        $scope.dateCourante=new Date();
    });

/******************************************************************************************************************
 controlleur pour le module accueil
 *****************************************************************************************************************/
angular.module('myApp.accueil')
    .controller('AccueilCtrl', function() {

    });


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

    });



/******************************************************************************************************************
 controlleur pour le module article
 *****************************************************************************************************************/
angular.module('myApp.articles')
    .controller('View2Ctrl', function() {

    });

/******************************************************************************************************************
 controlleur pour le module publication
 *****************************************************************************************************************/
angular.module('myApp.publication')

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

    .controller('ListePublicationCtrl', function($scope,$routeParams,PublicationFactory,$filter,Pagination) {
        $scope.auteur =$routeParams.auteur || null;

        $scope.pagination = Pagination.getNew(15);


        $scope.loadPublication=function(){
            PublicationFactory.getPublications().then(
                function(data){

                    $scope.totalPages=data.length;
                    if($scope.auteur!=null)// On affiche les publications d'un auteur
                    {
                        $scope.pagination.numPages = Math.ceil(data.length/$scope.pagination.perPage);
                        $scope.publications=$filter('filter')(data,{auteur:$scope.auteur},true);
                        $scope.all=true;
                    }
                    else // on affiche toutes les publications
                    {
                        $scope.publications=data;
                        $scope.pagination.numPages = Math.ceil(data.length/$scope.pagination.perPage);
                        console.log($scope.publications);
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


/******************************************************************************************************************
 controlleur pour le module concours
 *****************************************************************************************************************/
angular.module('myApp.concours')
    .controller('FormulaireConcoursCtrl', function($scope,$routeParams,$location,PublicationFactory,$filter) {
        $scope.new_publication = false;
        var id=$routeParams.id || null;
        if(id!=null)// Edition d'une publication
        {
            $scope.type="Edition de Publication";
        }
        else // creation d'une publication
        {
            $scope.type="Nouveau Concours";
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
    });


