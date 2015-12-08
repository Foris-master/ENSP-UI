/**
 * Created by evari on 17/11/2015.
 */



/******************************************************************************************************************
 controlleur pour le module header
 *****************************************************************************************************************/
app_header


    .controller('headerCtrl',['$scope','$stateParams',
    function($scope) {
        $scope.dateCourante=new Date();
        $scope.menu="ecole";
        $scope.user={};
        $scope.loggedIn = function(){
            console.log($scope.user);
        }
    }]);

/******************************************************************************************************************
 controlleur pour le module accueil
 *****************************************************************************************************************/
app_accueil
    .controller('AccueilCtrl',['$scope','$stateParams',
    function($scope,$stateParams) {


    }]);


