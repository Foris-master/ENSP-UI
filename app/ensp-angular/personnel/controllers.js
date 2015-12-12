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
                    //console.log($scope.personnels);
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
    .controller('PersonnelCtrl',['$scope','PersonnelFactory','$stateParams',
        function($scope,PersonnelFactory,$stateParams) {
        //recuperation de la personnel

        PersonnelFactory.getPersonnel({nom:$stateParams.nom,prenom:$stateParams.prenom}).then(
            function(data){
                $scope.personnel=data;

            },function(msg){
                console.log(msg);
            }
        );

    }]);

