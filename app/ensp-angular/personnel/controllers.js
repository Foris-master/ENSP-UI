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

        $scope.t="<h2>qsdqs</h2>";

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
        function($scope,$stateParams,PersonnelFactory) {
        //recuperation de la personnel

        PersonnelFactory.getPersonnel($stateParams.id).then(
            function(data){
                $scope.personnel=data;
                console.log(data.projets);

            },function(msg){
                console.log(msg);
            }
        );

    }])



;

