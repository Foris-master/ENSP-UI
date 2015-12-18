/**
 * Created by Thedward on 14/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Etudiant
 *****************************************************************************************************************/
app_etudiant
    .controller('ListeEtudiantCtrl', ['$scope','$location','EtudiantFactory','ArticleFactory','$filter',
        function($scope,$location,EtudiantFactory,ArticleFactory,$filter) {

        $scope.titre="Nos étudiants";
        $scope.sousTitre="Tous les étudiants";

        $scope.par_page =15;

        $scope.loadEtudiant=function(){
            EtudiantFactory.getEtudiants().then(
                function(data){
                    angular.forEach(data,function(d,key){
                        d.image=d.image==null?"profil.png":d.image;
                    })
                    $scope.etudiants=data;
                    $scope.allEtudiant=data;
                    //console.log($scope.etudiants);
                },function(msg){
                    console.log(msg);
                }
            );

        };

        $scope.EtudiantParNiveau=function(nv){
            $scope.par_page=15;
            $scope.sousTitre="Etudiant du niveau "+nv;
            $scope.etudiants=$filter('filter')($scope.allEtudiant,{niveau:nv});
        }

        $scope.afficherAssociation=function(){
            $scope.par_page=10;
            EtudiantFactory.getAssociations().then(
                function(data){
                    $scope.associations=data;
                },function(msg){
                    console.log(msg);
                }
            );
        }

        $scope.afficherActivites=function(){
            $scope.par_page=15;
            ArticleFactory.getSpecifiqueArticles().then(
                function(data){
                    console.log(data);
                    $scope.activites=$filter('filter')(data,{groupe:"etudiant"});

                },function(msg){
                    console.log(msg);
                }
            );
        }

        $scope.changementPage=function(){
            $scope.loadEtudiant();
        };

        $scope.loadEtudiant();
    }])
    .controller('EtudiantCtrl',['$scope','EtudiantFactory','$stateParams','PublicationFactory',
        function($scope,EtudiantFactory,$stateParams,PublicationFactory) {
        //recuperation de la etudiant

        EtudiantFactory.getEtudiant({nom:$stateParams.nom,prenom:$stateParams.prenom}).then(
            function(data){
                $scope.etudiant=data;
                $scope.etudiant.image=$scope.etudiant.image==null?"profil.png":$scope.etudiant.image;
                $scope.etudiant.sexe=$scope.etudiant.sexe=="M"?"Masculin":"Féminin";

            },function(msg){
                console.log(msg);
            }
        );

        $scope.afficherAssociationEtudiant=function(id){
            $scope.par_page=15;
            EtudiantFactory.getAssociations({idPersonnel:id}).then(
                function(data){
                    $scope.associations=data;
                    console.log(data);

                },function(msg){
                    console.log(msg);
                }
            );
        };
        $scope.afficherPublicationEtudiant=function(id){
            $scope.par_page=7;
            PublicationFactory.getPublicationsEtudiant({idPersonnel:id}).then(
                function(data){
                    $scope.publications=data;
                    console.log(data);

                },function(msg){
                    console.log(msg);
                }
            );
        }
    }])
    .controller('ActivitesCtrl',['$scope','ArticleFactory','$stateParams','$filter',
        function($scope,ArticleFactory,$stateParams,$filter) {
            //recuperation de la etudiant

            ArticleFactory.getArticle({titre:$stateParams.titre}).then(
                function(data){
                    $scope.activite=data;

                },function(msg){
                    console.log(msg);
                }
            );

        }])
    .controller('AssociationCtrl',['$scope','EtudiantFactory','$stateParams',
        function($scope,EtudiantFactory,$stateParams) {
            //recuperation de la etudiant

            EtudiantFactory.getAssociation({cygle:$stateParams.cygle}).then(
                function(data){
                    $scope.association=data;

                },function(msg){
                    console.log(msg);
                }
            );

        }]);

