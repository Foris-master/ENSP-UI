/**
 * Created by evari on 25/11/2015.
 */
app_actualite
    .directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control) {
            var checker = function () {

                //get the value of the first password
                var e1 = scope.$eval(attrs.ngModel);

                //get the value of the other password
                var e2 = scope.$eval(attrs.passwordMatch);
                if(e2!=null)
                    return e1 == e2;
            };
            scope.$watch(checker, function (n) {

                //set the form control to valid if both
                //passwords are the same, else invalid
                control.$setValidity("passwordNoMatch", n);
            });
        }
    };
}])
    .directive('content',[
        function ($compile) {
        return {
            restrict: 'A',
            scope: {
                con: '@'

            },
            template: '<h4 ng-click="add()">{{text}}</h4>',
            controller: function ($scope, $element) {

                $scope.add = function () {
                    //var el = $compile("<duplicate text='n'></duplicate>")($scope);
                    var  nouv = $('#txtEditor').parent().clone();
                    var rm = $compile("<remove text='Retirer'></remove>")($scope);
                    nouv.prepend(rm);
                    $('#idsubmit').before(nouv);
                };
            }
        }
    }])
    .directive('duplicate',[
        function ($compile) {
        return {
            restrict: 'E',
            scope: {
                text: '@',
                content:'='
            },
            template: '<h4 ng-click="add()">{{text}}</h4>',
            controller: function ($scope, $element) {
                $scope.add = function () {
                    //var el = $compile("<duplicate text='n'></duplicate>")($scope);
                    var  nouv = $('#editeur').parent().clone();
                    var rm = $compile("<remove text='Retirer'></remove>")($scope);
                    nouv.prepend(rm);
                    $('#idsubmit').before(nouv);
                };
            }
        }
    }])
    .directive('remove',[
    function ($compile) {
        return {
            restrict: 'E',
            scope: {
                text: '@'
            },
            template: '<h4 ng-click="add()">{{text}}</h4>',
            controller: function ($scope, $element) {
                $scope.add = function () {
                    $element.parent().remove();
                };
            }
        }
    }])
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);
;
