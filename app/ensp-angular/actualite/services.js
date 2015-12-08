/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 services pour le module Actualité
 *****************************************************************************************************************/
app_actualite
    .factory('ActualiteFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            actualites: false,
            actualite: false,
            getActualites: function () {
                var deferred = $q.defer();
                if (factory.actualites !== false) {
                    deferred.resolve(factory.actualites);
                } else {

                    $http.get("ressources/actualite.json").success(function(data,status){
                        factory.actualites = data;

                        deferred.resolve(factory.actualites);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les actualites');
                    });

                }

                return deferred.promise;

            },
            getActualite: function (id) {
                var deffered = $q.defer();
                var actualites = factory.getActualites().then(function(services){
                    deffered.resolve($filter('filter')(factory.actualites,{idActualite:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addActualite: function (actualite) {
                var defferd = $q.defer();
                factory.getActualites().then(function(res){
                  //  console.log(factory.actualites);
                    factory.actualites.push(actualite);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

