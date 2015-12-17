/**
 * Created by evaris on 12/12/2015.
 */
app_auth.controller('LoginCtrl', ['$scope','AuthenticationFactory',function ($scope,AuthenticationFactory) {
    $scope.user={};
    $scope.loggedIn = function(){
        console.log($scope.user);
        AuthenticationFactory.Login($scope.user.login,$scope.user.password,$scope.updateafterlogin);
    },
    $scope.updateafterlogin= function(response){
        console.log(response);
    }

}]);