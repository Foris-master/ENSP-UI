/**
 * Created by evaris on 17/11/2015.
 */

/******************************************************************************************************************
 services pour le module Auth
 *****************************************************************************************************************/
app_auth
    .factory('AuthFactory', ['$http','$filter','$q','$rootScope',
        function ($http,$filter,$q,$rootScope) {


            var factory = {
                isauthorize: true,
                isloged:false,
                needLogin: function (require) {

                    return require && $rootScope.currentUser === undefined;

                },
                needRole:function(roles ,level){
                    var res=true;
                    var that = this;
                    if(level=="All"){
                        that.res =roles.length <=$rootScope.currentUser.roles.length;
                        angular.forEach($rootScope.currentUser.roles, function(r){
                            that.res= that.res && roles.indexOf(r.name) !== -1;
                        });
                    }else {
                        angular.forEach($rootScope.currentUser.roles, function(r){
                            res= res || roles.indexOf(r.name) !== -1;
                        });
                    }
                    return !res;
                }

                ,
                hasAuthorization: function (access) {
                    var deferred = $q.defer();
                    /* if (factory.isauthorize !== false) {
                     deferred.resolve(factory.isauthorize);
                     } else {*/

                    if (access.loginRequired !== undefined) {

                        if (factory.needLogin(access.loginRequired)) {
                            deferred.reject('Login is required');
                            return deferred.promise;
                        } else {
                            factory.isauthorize= true;

                        }
                        if(access.requiredPermissions !== undefined && access.loginRequired){

                            if(factory.needRole(access.requiredPermissions,access.permissionType)){
                                deferred.reject('Need '+access.permissionType+' '+access.requiredPermissions+' roles');
                            }else{
                                factory.isauthorize=factory.isauthorize && true;

                            }

                        }
                    }

                    deferred.resolve(factory.isauthorize);


                    //}

                    return deferred.promise;

                }
            };

            return factory

        }]);

