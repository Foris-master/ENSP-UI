/**
 * Created by Thedward on 05/12/2015.
 */

/******************************************************************************************************************
 services pour le module Diplome
 *****************************************************************************************************************/
app_diplome
    .factory('DiplomeFactory', function ($http,$filter,$q) {


        var factory = {
            diplomes: false,
            diplome: false,
            getDiplomes: function () {
                var deferred = $q.defer();
                //if (factory.diplomes !== false) {
                //    deferred.resolve(factory.diplomes);
                //} else {

                    $http.get("ressources/diplome.json").success(function(data,status){
                        factory.diplomes = data;

                        deferred.resolve(factory.diplomes);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les diplomes');
                    });

                //}

                return deferred.promise;

            },
            getDiplome: function (id) {
                var deffered = $q.defer();
                var diplomes = factory.getDiplomes().then(function(services){
                    deffered.resolve($filter('filter')(factory.diplomes,{idDiplome:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getDiplomeObjet: function (obj) {
                console.log(obj)
                var deffered = $q.defer();
                var diplomes = factory.getDiplomes().then(function(services){
                    deffered.resolve($filter('filter')(factory.diplomes,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addDiplome: function (diplome) {
                var defferd = $q.defer();
                factory.getDiplomes().then(function(res){
                    console.log(factory.diplomes);
                    factory.diplomes.push(diplome);
                })


                return defferd.promise;
            }
        }

        return factory

    });

