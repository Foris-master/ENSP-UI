/**
 * Created by Thedward on 27/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Personnel
 *****************************************************************************************************************/
app_personnel
    .controller('ListePersonnelCtrl', ['$scope','$location','PersonnelFactory','$stateParams',
        function($scope,$location,PersonnelFactory,$stateParams) {

        var categorie=$stateParams.categorie;
        
        console.log(categorie);
        $scope.titre="Personnel Enseignant";
        if(categorie=="administratif"){
            $scope.titre="Personnel Administratif";
        }

        if(categorie!="enseignant" && categorie!="administratif"){
            $location.path("/liste-personnel/enseignant");
        }

        $scope.par_page =15;

        $scope.loadPersonnel=function(){
            PersonnelFactory.getPersonnels().then(
                function(data){

                    $scope.personnels=data;
                    console.log($scope.personnels);
                },function(msg){
                    console.log(msg);
                }
            );

        };

        $scope.changementPage=function(){
            $scope.loadPersonnel();
        };

        $scope.loadPersonnel();
    }])
    .controller('PersonnelCtrl',['$scope','PersonnelFactory','$stateParams','PublicationFactory',
        function($scope,PersonnelFactory,$stateParams,PublicationFactory) {
        //recuperation de la personnel

        PersonnelFactory.getPersonnel({personne:{nomPersonne:$stateParams.nom,prenomPersonne:$stateParams.prenom}}).then(
            function(data){
                $scope.personnel=data;
                $scope.personnel.publications=PublicationFactory.
                        getPublicationsPersonnel({personnel:{personne:{nomPersonne:$stateParams.nom,prenomPersonne:$stateParams.prenom}}}).then(
                        function(d){
                            $scope.personnel.publications=d;
                        },function(msg){
                console.log(msg);
            });
                //$scope.personnel.personne.utilisateur.photo=$scope.personnel.personne.utilisateur.photo==null?"profil.png":$scope.personnel.personne.utilisateur.photo;
                $scope.personnel.image=data.personne.utilisateur.photo==null?"images/min/profil.png":host_url+data.personne.utilisateur.photo;

            },function(msg){
                console.log(msg);
            }
        );

    }]);

