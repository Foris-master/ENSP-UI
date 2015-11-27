/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 controlleur pour le module concours
 *****************************************************************************************************************/
app_concours
    .controller('FormulaireConcoursCtrl', function($scope,$routeParams,$location,PublicationFactory,$filter) {
        $scope.new_concours = false;
        var id=$routeParams.id || null;
        if(id!=null)// Edition d'une publication
        {
            $scope.type="Edition de Concours";
        }
        else // creation d'une publication
        {
            $scope.type="Nouveau Concours";
        }
        $scope.save_concours = function(){
            if($scope.new_concours!=false){
               // PublicationFactory.addPublication($scope.new_publication);
               // $location.path('/liste-publication')
                console.log($scope.new_concours);
            }else{
                console.log('veullez remplir les champs');
            }

            console.log($scope.new_publication);
        }
    });


