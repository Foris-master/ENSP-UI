/**
 * Created by evari on 17/11/2015.
 */


/******************************************************************************************************************
            services pour le module concours
 *****************************************************************************************************************/

app_concours
    .factory('ConcoursFactory',['$http','$q','$filter','$timeout',
    function ($http,$q,$filter,$timeout) {


        var factory = {
            concours: false,
            concour: false,
            candidats:false,
            candidat:false,
            getConcours: function () {
                var deferred = $q.defer();
                if (factory.concours !== false) {
                    deferred.resolve(factory.concours);
                } else {

                    $http.get("ressources/concours.json").success(function(data,status){
                        factory.concours = data;

                        deferred.resolve(factory.concours);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les concours');
                    });

                }

                return deferred.promise;

            },
            getConcour: function (id) {
                var deffered = $q.defer();
                var concours = factory.getConcours().then(function(services){
                    deffered.resolve($filter('filter')(factory.concours,{idConcour:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;
            },
            addConcour: function (concour) {
                var defferd = $q.defer();
                factory.getConcours().then(function(res){
                    console.log(factory.concours);
                    factory.concours.push(concour);
                })


                return defferd.promise;
            },
            getCandidats: function (obj) {
                var deferred = $q.defer();
                if (factory.candidats !== false) {
                    deferred.resolve(factory.candidats);
                } else {

                    $http.get("ressources/liste-candidat.json").success(function(data,status){
                        factory.candidats = data;

                        deferred.resolve($filter('filter')(factory.candidats,obj,true));

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les candidats');
                    });

                }

                return deferred.promise;

            },
            getCandidat: function (obj) {
                var deffered = $q.defer();
                var candidats = factory.getCandidats(obj).then(function(services){
                    deffered.resolve(factory.candidats);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;
            },
            IdentificationCandidat: function (candidat) {
                var deferred = $q.defer();

                $http.post("ressources/concours.json",candidat).success(function(data,status){
                    factory.candidat = data;

                    deferred.resolve(factory.candidat);

                }).error(function(data,status){
                    console.log(status);
                    deferred.reject('Impossible d\'identifier le candidat');
                });

                return deferred.promise;
            }
        }

        return factory

    }]);
